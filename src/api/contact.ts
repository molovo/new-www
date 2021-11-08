import { ServerClient } from 'postmark'
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'
import { MessageSendingResponse } from 'postmark/dist/client/models'

// Send an email:
const client = new ServerClient(process.env.POSTMARK_API_KEY as string)

interface Response {
  success: boolean
  message: string
}

const sendEmail = async (
  email: string,
  message: string
): Promise<MessageSendingResponse> =>
  client.sendEmail({
    To: process.env.CONTACT_FORM_EMAIL_TO as string,
    From: process.env.CONTACT_FORM_EMAIL_FROM as string,
    ReplyTo: email,
    Subject: 'Contact form submission from molovo.co',
    TextBody: message,
  })

export default async function contact(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse<Response>
): Promise<void> {
  console.log(req.body)
  const { email, message } = JSON.parse(req.body as string) as {
    email: string
    message: string
  }
  console.log(email, message)

  try {
    const response = await sendEmail(email, message)
    console.log(response)
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      success: false,
      message: err,
    })
  }

  return res.json({
    success: true,
    message: 'Message sent',
  })
}
