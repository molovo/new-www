export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  flags?: Maybe<SiteFlags>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteFlags = {
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<Scalars['Boolean']>;
  PRESERVE_WEBPACK_CACHE?: Maybe<Scalars['Boolean']>;
  DEV_SSR?: Maybe<Scalars['Boolean']>;
  FAST_DEV?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<Social>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  previousPostId?: Maybe<Scalars['String']>;
  nextPostId?: Maybe<Scalars['String']>;
  breadcrumb?: Maybe<SitePageContextBreadcrumb>;
};

export type SitePageContextBreadcrumb = {
  location?: Maybe<Scalars['String']>;
  crumbs?: Maybe<Array<Maybe<SitePageContextBreadcrumbCrumbs>>>;
};

export type SitePageContextBreadcrumbCrumbs = {
  pathname?: Maybe<Scalars['String']>;
  crumbLabel?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  packageJson?: Maybe<SitePluginPackageJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePluginPluginOptions = {
  postCssPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPostCssPlugins>>>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
  remarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsRemarkPlugins>>>;
  rehypePlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsRehypePlugins>>>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  defaults?: Maybe<SitePluginPluginOptionsDefaults>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['String']>;
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  useAutoGen?: Maybe<Scalars['Boolean']>;
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>;
  trailingSlashes?: Maybe<Scalars['Boolean']>;
  domain?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPlugins = {
  postcssPlugin?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  resolve?: Maybe<Scalars['String']>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  dashes?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsRemarkPlugins = {
  resolve?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsRehypePlugins = {
  resolve?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaults = {
  formats?: Maybe<Array<Maybe<Scalars['String']>>>;
  quality?: Maybe<Scalars['Int']>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SitePluginPluginOptionsFeeds = {
  query?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};


export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<Frontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  fields?: Maybe<Fields>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type Author = {
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type Social = {
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  dribbble?: Maybe<Scalars['String']>;
};

export type Frontmatter = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  order?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<File>;
  image?: Maybe<File>;
  bgImage?: Maybe<File>;
  images?: Maybe<Array<Maybe<File>>>;
  embeddedImagesLocal?: Maybe<Array<Maybe<File>>>;
  color?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  titleColor?: Maybe<Scalars['String']>;
  headerModifier?: Maybe<Scalars['String']>;
  headerModiferMobile?: Maybe<Scalars['String']>;
  removeBottomPadding?: Maybe<Scalars['Boolean']>;
  layout?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  excerpt?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  imageAltText?: Maybe<Scalars['String']>;
  imageFullSize?: Maybe<Scalars['Boolean']>;
  client?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  headerModifierMobile?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  bgImageOpacity?: Maybe<Scalars['Float']>;
  bgImagePosition?: Maybe<Scalars['String']>;
  bgImageSize?: Maybe<Scalars['String']>;
  bgImageRepeat?: Maybe<Scalars['String']>;
  bgImageBlendMode?: Maybe<Scalars['String']>;
  ctaFontSize?: Maybe<Scalars['String']>;
  ctaMaxWidth?: Maybe<Scalars['String']>;
  ctaButtonStyles?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type FrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Fields = {
  url?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  type?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};


export type FieldsDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<FrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<FieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<FrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  fields?: Maybe<FieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  thumbnail?: Maybe<FileFilterInput>;
  image?: Maybe<FileFilterInput>;
  bgImage?: Maybe<FileFilterInput>;
  images?: Maybe<FileFilterListInput>;
  embeddedImagesLocal?: Maybe<FileFilterListInput>;
  color?: Maybe<StringQueryOperatorInput>;
  bgColor?: Maybe<StringQueryOperatorInput>;
  titleColor?: Maybe<StringQueryOperatorInput>;
  headerModifier?: Maybe<StringQueryOperatorInput>;
  headerModiferMobile?: Maybe<StringQueryOperatorInput>;
  removeBottomPadding?: Maybe<BooleanQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<StringQueryOperatorInput>;
  imageAltText?: Maybe<StringQueryOperatorInput>;
  imageFullSize?: Maybe<BooleanQueryOperatorInput>;
  client?: Maybe<StringQueryOperatorInput>;
  role?: Maybe<StringQueryOperatorInput>;
  headerModifierMobile?: Maybe<StringQueryOperatorInput>;
  year?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  bgImageOpacity?: Maybe<FloatQueryOperatorInput>;
  bgImagePosition?: Maybe<StringQueryOperatorInput>;
  bgImageSize?: Maybe<StringQueryOperatorInput>;
  bgImageRepeat?: Maybe<StringQueryOperatorInput>;
  bgImageBlendMode?: Maybe<StringQueryOperatorInput>;
  ctaFontSize?: Maybe<StringQueryOperatorInput>;
  ctaMaxWidth?: Maybe<StringQueryOperatorInput>;
  ctaButtonStyles?: Maybe<StringQueryOperatorInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileFilterListInput = {
  elemMatch?: Maybe<FileFilterInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type FieldsFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  client?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___description'
  | 'childrenMdx___frontmatter___featured'
  | 'childrenMdx___frontmatter___order'
  | 'childrenMdx___frontmatter___thumbnail___sourceInstanceName'
  | 'childrenMdx___frontmatter___thumbnail___absolutePath'
  | 'childrenMdx___frontmatter___thumbnail___relativePath'
  | 'childrenMdx___frontmatter___thumbnail___extension'
  | 'childrenMdx___frontmatter___thumbnail___size'
  | 'childrenMdx___frontmatter___thumbnail___prettySize'
  | 'childrenMdx___frontmatter___thumbnail___modifiedTime'
  | 'childrenMdx___frontmatter___thumbnail___accessTime'
  | 'childrenMdx___frontmatter___thumbnail___changeTime'
  | 'childrenMdx___frontmatter___thumbnail___birthTime'
  | 'childrenMdx___frontmatter___thumbnail___root'
  | 'childrenMdx___frontmatter___thumbnail___dir'
  | 'childrenMdx___frontmatter___thumbnail___base'
  | 'childrenMdx___frontmatter___thumbnail___ext'
  | 'childrenMdx___frontmatter___thumbnail___name'
  | 'childrenMdx___frontmatter___thumbnail___relativeDirectory'
  | 'childrenMdx___frontmatter___thumbnail___dev'
  | 'childrenMdx___frontmatter___thumbnail___mode'
  | 'childrenMdx___frontmatter___thumbnail___nlink'
  | 'childrenMdx___frontmatter___thumbnail___uid'
  | 'childrenMdx___frontmatter___thumbnail___gid'
  | 'childrenMdx___frontmatter___thumbnail___rdev'
  | 'childrenMdx___frontmatter___thumbnail___ino'
  | 'childrenMdx___frontmatter___thumbnail___atimeMs'
  | 'childrenMdx___frontmatter___thumbnail___mtimeMs'
  | 'childrenMdx___frontmatter___thumbnail___ctimeMs'
  | 'childrenMdx___frontmatter___thumbnail___atime'
  | 'childrenMdx___frontmatter___thumbnail___mtime'
  | 'childrenMdx___frontmatter___thumbnail___ctime'
  | 'childrenMdx___frontmatter___thumbnail___birthtime'
  | 'childrenMdx___frontmatter___thumbnail___birthtimeMs'
  | 'childrenMdx___frontmatter___thumbnail___blksize'
  | 'childrenMdx___frontmatter___thumbnail___blocks'
  | 'childrenMdx___frontmatter___thumbnail___publicURL'
  | 'childrenMdx___frontmatter___thumbnail___childrenImageSharp'
  | 'childrenMdx___frontmatter___thumbnail___childrenMdx'
  | 'childrenMdx___frontmatter___thumbnail___id'
  | 'childrenMdx___frontmatter___thumbnail___children'
  | 'childrenMdx___frontmatter___image___sourceInstanceName'
  | 'childrenMdx___frontmatter___image___absolutePath'
  | 'childrenMdx___frontmatter___image___relativePath'
  | 'childrenMdx___frontmatter___image___extension'
  | 'childrenMdx___frontmatter___image___size'
  | 'childrenMdx___frontmatter___image___prettySize'
  | 'childrenMdx___frontmatter___image___modifiedTime'
  | 'childrenMdx___frontmatter___image___accessTime'
  | 'childrenMdx___frontmatter___image___changeTime'
  | 'childrenMdx___frontmatter___image___birthTime'
  | 'childrenMdx___frontmatter___image___root'
  | 'childrenMdx___frontmatter___image___dir'
  | 'childrenMdx___frontmatter___image___base'
  | 'childrenMdx___frontmatter___image___ext'
  | 'childrenMdx___frontmatter___image___name'
  | 'childrenMdx___frontmatter___image___relativeDirectory'
  | 'childrenMdx___frontmatter___image___dev'
  | 'childrenMdx___frontmatter___image___mode'
  | 'childrenMdx___frontmatter___image___nlink'
  | 'childrenMdx___frontmatter___image___uid'
  | 'childrenMdx___frontmatter___image___gid'
  | 'childrenMdx___frontmatter___image___rdev'
  | 'childrenMdx___frontmatter___image___ino'
  | 'childrenMdx___frontmatter___image___atimeMs'
  | 'childrenMdx___frontmatter___image___mtimeMs'
  | 'childrenMdx___frontmatter___image___ctimeMs'
  | 'childrenMdx___frontmatter___image___atime'
  | 'childrenMdx___frontmatter___image___mtime'
  | 'childrenMdx___frontmatter___image___ctime'
  | 'childrenMdx___frontmatter___image___birthtime'
  | 'childrenMdx___frontmatter___image___birthtimeMs'
  | 'childrenMdx___frontmatter___image___blksize'
  | 'childrenMdx___frontmatter___image___blocks'
  | 'childrenMdx___frontmatter___image___publicURL'
  | 'childrenMdx___frontmatter___image___childrenImageSharp'
  | 'childrenMdx___frontmatter___image___childrenMdx'
  | 'childrenMdx___frontmatter___image___id'
  | 'childrenMdx___frontmatter___image___children'
  | 'childrenMdx___frontmatter___bgImage___sourceInstanceName'
  | 'childrenMdx___frontmatter___bgImage___absolutePath'
  | 'childrenMdx___frontmatter___bgImage___relativePath'
  | 'childrenMdx___frontmatter___bgImage___extension'
  | 'childrenMdx___frontmatter___bgImage___size'
  | 'childrenMdx___frontmatter___bgImage___prettySize'
  | 'childrenMdx___frontmatter___bgImage___modifiedTime'
  | 'childrenMdx___frontmatter___bgImage___accessTime'
  | 'childrenMdx___frontmatter___bgImage___changeTime'
  | 'childrenMdx___frontmatter___bgImage___birthTime'
  | 'childrenMdx___frontmatter___bgImage___root'
  | 'childrenMdx___frontmatter___bgImage___dir'
  | 'childrenMdx___frontmatter___bgImage___base'
  | 'childrenMdx___frontmatter___bgImage___ext'
  | 'childrenMdx___frontmatter___bgImage___name'
  | 'childrenMdx___frontmatter___bgImage___relativeDirectory'
  | 'childrenMdx___frontmatter___bgImage___dev'
  | 'childrenMdx___frontmatter___bgImage___mode'
  | 'childrenMdx___frontmatter___bgImage___nlink'
  | 'childrenMdx___frontmatter___bgImage___uid'
  | 'childrenMdx___frontmatter___bgImage___gid'
  | 'childrenMdx___frontmatter___bgImage___rdev'
  | 'childrenMdx___frontmatter___bgImage___ino'
  | 'childrenMdx___frontmatter___bgImage___atimeMs'
  | 'childrenMdx___frontmatter___bgImage___mtimeMs'
  | 'childrenMdx___frontmatter___bgImage___ctimeMs'
  | 'childrenMdx___frontmatter___bgImage___atime'
  | 'childrenMdx___frontmatter___bgImage___mtime'
  | 'childrenMdx___frontmatter___bgImage___ctime'
  | 'childrenMdx___frontmatter___bgImage___birthtime'
  | 'childrenMdx___frontmatter___bgImage___birthtimeMs'
  | 'childrenMdx___frontmatter___bgImage___blksize'
  | 'childrenMdx___frontmatter___bgImage___blocks'
  | 'childrenMdx___frontmatter___bgImage___publicURL'
  | 'childrenMdx___frontmatter___bgImage___childrenImageSharp'
  | 'childrenMdx___frontmatter___bgImage___childrenMdx'
  | 'childrenMdx___frontmatter___bgImage___id'
  | 'childrenMdx___frontmatter___bgImage___children'
  | 'childrenMdx___frontmatter___images'
  | 'childrenMdx___frontmatter___images___sourceInstanceName'
  | 'childrenMdx___frontmatter___images___absolutePath'
  | 'childrenMdx___frontmatter___images___relativePath'
  | 'childrenMdx___frontmatter___images___extension'
  | 'childrenMdx___frontmatter___images___size'
  | 'childrenMdx___frontmatter___images___prettySize'
  | 'childrenMdx___frontmatter___images___modifiedTime'
  | 'childrenMdx___frontmatter___images___accessTime'
  | 'childrenMdx___frontmatter___images___changeTime'
  | 'childrenMdx___frontmatter___images___birthTime'
  | 'childrenMdx___frontmatter___images___root'
  | 'childrenMdx___frontmatter___images___dir'
  | 'childrenMdx___frontmatter___images___base'
  | 'childrenMdx___frontmatter___images___ext'
  | 'childrenMdx___frontmatter___images___name'
  | 'childrenMdx___frontmatter___images___relativeDirectory'
  | 'childrenMdx___frontmatter___images___dev'
  | 'childrenMdx___frontmatter___images___mode'
  | 'childrenMdx___frontmatter___images___nlink'
  | 'childrenMdx___frontmatter___images___uid'
  | 'childrenMdx___frontmatter___images___gid'
  | 'childrenMdx___frontmatter___images___rdev'
  | 'childrenMdx___frontmatter___images___ino'
  | 'childrenMdx___frontmatter___images___atimeMs'
  | 'childrenMdx___frontmatter___images___mtimeMs'
  | 'childrenMdx___frontmatter___images___ctimeMs'
  | 'childrenMdx___frontmatter___images___atime'
  | 'childrenMdx___frontmatter___images___mtime'
  | 'childrenMdx___frontmatter___images___ctime'
  | 'childrenMdx___frontmatter___images___birthtime'
  | 'childrenMdx___frontmatter___images___birthtimeMs'
  | 'childrenMdx___frontmatter___images___blksize'
  | 'childrenMdx___frontmatter___images___blocks'
  | 'childrenMdx___frontmatter___images___publicURL'
  | 'childrenMdx___frontmatter___images___childrenImageSharp'
  | 'childrenMdx___frontmatter___images___childrenMdx'
  | 'childrenMdx___frontmatter___images___id'
  | 'childrenMdx___frontmatter___images___children'
  | 'childrenMdx___frontmatter___embeddedImagesLocal'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___sourceInstanceName'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___absolutePath'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___relativePath'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___extension'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___size'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___prettySize'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___modifiedTime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___accessTime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___changeTime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___birthTime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___root'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___dir'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___base'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___ext'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___name'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___relativeDirectory'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___dev'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___mode'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___nlink'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___uid'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___gid'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___rdev'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___ino'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___atimeMs'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___mtimeMs'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___ctimeMs'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___atime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___mtime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___ctime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___birthtime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___birthtimeMs'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___blksize'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___blocks'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___publicURL'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___childrenImageSharp'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___childrenMdx'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___id'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___children'
  | 'childrenMdx___frontmatter___color'
  | 'childrenMdx___frontmatter___bgColor'
  | 'childrenMdx___frontmatter___titleColor'
  | 'childrenMdx___frontmatter___headerModifier'
  | 'childrenMdx___frontmatter___headerModiferMobile'
  | 'childrenMdx___frontmatter___removeBottomPadding'
  | 'childrenMdx___frontmatter___layout'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___tags'
  | 'childrenMdx___frontmatter___excerpt'
  | 'childrenMdx___frontmatter___categories'
  | 'childrenMdx___frontmatter___imageAltText'
  | 'childrenMdx___frontmatter___imageFullSize'
  | 'childrenMdx___frontmatter___client'
  | 'childrenMdx___frontmatter___role'
  | 'childrenMdx___frontmatter___headerModifierMobile'
  | 'childrenMdx___frontmatter___year'
  | 'childrenMdx___frontmatter___url'
  | 'childrenMdx___frontmatter___name'
  | 'childrenMdx___frontmatter___bgImageOpacity'
  | 'childrenMdx___frontmatter___bgImagePosition'
  | 'childrenMdx___frontmatter___bgImageSize'
  | 'childrenMdx___frontmatter___bgImageRepeat'
  | 'childrenMdx___frontmatter___bgImageBlendMode'
  | 'childrenMdx___frontmatter___ctaFontSize'
  | 'childrenMdx___frontmatter___ctaMaxWidth'
  | 'childrenMdx___frontmatter___ctaButtonStyles'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___fields___url'
  | 'childrenMdx___fields___date'
  | 'childrenMdx___fields___type'
  | 'childrenMdx___fields___client'
  | 'childrenMdx___fields___order'
  | 'childrenMdx___fields___slug'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___description'
  | 'childMdx___frontmatter___featured'
  | 'childMdx___frontmatter___order'
  | 'childMdx___frontmatter___thumbnail___sourceInstanceName'
  | 'childMdx___frontmatter___thumbnail___absolutePath'
  | 'childMdx___frontmatter___thumbnail___relativePath'
  | 'childMdx___frontmatter___thumbnail___extension'
  | 'childMdx___frontmatter___thumbnail___size'
  | 'childMdx___frontmatter___thumbnail___prettySize'
  | 'childMdx___frontmatter___thumbnail___modifiedTime'
  | 'childMdx___frontmatter___thumbnail___accessTime'
  | 'childMdx___frontmatter___thumbnail___changeTime'
  | 'childMdx___frontmatter___thumbnail___birthTime'
  | 'childMdx___frontmatter___thumbnail___root'
  | 'childMdx___frontmatter___thumbnail___dir'
  | 'childMdx___frontmatter___thumbnail___base'
  | 'childMdx___frontmatter___thumbnail___ext'
  | 'childMdx___frontmatter___thumbnail___name'
  | 'childMdx___frontmatter___thumbnail___relativeDirectory'
  | 'childMdx___frontmatter___thumbnail___dev'
  | 'childMdx___frontmatter___thumbnail___mode'
  | 'childMdx___frontmatter___thumbnail___nlink'
  | 'childMdx___frontmatter___thumbnail___uid'
  | 'childMdx___frontmatter___thumbnail___gid'
  | 'childMdx___frontmatter___thumbnail___rdev'
  | 'childMdx___frontmatter___thumbnail___ino'
  | 'childMdx___frontmatter___thumbnail___atimeMs'
  | 'childMdx___frontmatter___thumbnail___mtimeMs'
  | 'childMdx___frontmatter___thumbnail___ctimeMs'
  | 'childMdx___frontmatter___thumbnail___atime'
  | 'childMdx___frontmatter___thumbnail___mtime'
  | 'childMdx___frontmatter___thumbnail___ctime'
  | 'childMdx___frontmatter___thumbnail___birthtime'
  | 'childMdx___frontmatter___thumbnail___birthtimeMs'
  | 'childMdx___frontmatter___thumbnail___blksize'
  | 'childMdx___frontmatter___thumbnail___blocks'
  | 'childMdx___frontmatter___thumbnail___publicURL'
  | 'childMdx___frontmatter___thumbnail___childrenImageSharp'
  | 'childMdx___frontmatter___thumbnail___childrenMdx'
  | 'childMdx___frontmatter___thumbnail___id'
  | 'childMdx___frontmatter___thumbnail___children'
  | 'childMdx___frontmatter___image___sourceInstanceName'
  | 'childMdx___frontmatter___image___absolutePath'
  | 'childMdx___frontmatter___image___relativePath'
  | 'childMdx___frontmatter___image___extension'
  | 'childMdx___frontmatter___image___size'
  | 'childMdx___frontmatter___image___prettySize'
  | 'childMdx___frontmatter___image___modifiedTime'
  | 'childMdx___frontmatter___image___accessTime'
  | 'childMdx___frontmatter___image___changeTime'
  | 'childMdx___frontmatter___image___birthTime'
  | 'childMdx___frontmatter___image___root'
  | 'childMdx___frontmatter___image___dir'
  | 'childMdx___frontmatter___image___base'
  | 'childMdx___frontmatter___image___ext'
  | 'childMdx___frontmatter___image___name'
  | 'childMdx___frontmatter___image___relativeDirectory'
  | 'childMdx___frontmatter___image___dev'
  | 'childMdx___frontmatter___image___mode'
  | 'childMdx___frontmatter___image___nlink'
  | 'childMdx___frontmatter___image___uid'
  | 'childMdx___frontmatter___image___gid'
  | 'childMdx___frontmatter___image___rdev'
  | 'childMdx___frontmatter___image___ino'
  | 'childMdx___frontmatter___image___atimeMs'
  | 'childMdx___frontmatter___image___mtimeMs'
  | 'childMdx___frontmatter___image___ctimeMs'
  | 'childMdx___frontmatter___image___atime'
  | 'childMdx___frontmatter___image___mtime'
  | 'childMdx___frontmatter___image___ctime'
  | 'childMdx___frontmatter___image___birthtime'
  | 'childMdx___frontmatter___image___birthtimeMs'
  | 'childMdx___frontmatter___image___blksize'
  | 'childMdx___frontmatter___image___blocks'
  | 'childMdx___frontmatter___image___publicURL'
  | 'childMdx___frontmatter___image___childrenImageSharp'
  | 'childMdx___frontmatter___image___childrenMdx'
  | 'childMdx___frontmatter___image___id'
  | 'childMdx___frontmatter___image___children'
  | 'childMdx___frontmatter___bgImage___sourceInstanceName'
  | 'childMdx___frontmatter___bgImage___absolutePath'
  | 'childMdx___frontmatter___bgImage___relativePath'
  | 'childMdx___frontmatter___bgImage___extension'
  | 'childMdx___frontmatter___bgImage___size'
  | 'childMdx___frontmatter___bgImage___prettySize'
  | 'childMdx___frontmatter___bgImage___modifiedTime'
  | 'childMdx___frontmatter___bgImage___accessTime'
  | 'childMdx___frontmatter___bgImage___changeTime'
  | 'childMdx___frontmatter___bgImage___birthTime'
  | 'childMdx___frontmatter___bgImage___root'
  | 'childMdx___frontmatter___bgImage___dir'
  | 'childMdx___frontmatter___bgImage___base'
  | 'childMdx___frontmatter___bgImage___ext'
  | 'childMdx___frontmatter___bgImage___name'
  | 'childMdx___frontmatter___bgImage___relativeDirectory'
  | 'childMdx___frontmatter___bgImage___dev'
  | 'childMdx___frontmatter___bgImage___mode'
  | 'childMdx___frontmatter___bgImage___nlink'
  | 'childMdx___frontmatter___bgImage___uid'
  | 'childMdx___frontmatter___bgImage___gid'
  | 'childMdx___frontmatter___bgImage___rdev'
  | 'childMdx___frontmatter___bgImage___ino'
  | 'childMdx___frontmatter___bgImage___atimeMs'
  | 'childMdx___frontmatter___bgImage___mtimeMs'
  | 'childMdx___frontmatter___bgImage___ctimeMs'
  | 'childMdx___frontmatter___bgImage___atime'
  | 'childMdx___frontmatter___bgImage___mtime'
  | 'childMdx___frontmatter___bgImage___ctime'
  | 'childMdx___frontmatter___bgImage___birthtime'
  | 'childMdx___frontmatter___bgImage___birthtimeMs'
  | 'childMdx___frontmatter___bgImage___blksize'
  | 'childMdx___frontmatter___bgImage___blocks'
  | 'childMdx___frontmatter___bgImage___publicURL'
  | 'childMdx___frontmatter___bgImage___childrenImageSharp'
  | 'childMdx___frontmatter___bgImage___childrenMdx'
  | 'childMdx___frontmatter___bgImage___id'
  | 'childMdx___frontmatter___bgImage___children'
  | 'childMdx___frontmatter___images'
  | 'childMdx___frontmatter___images___sourceInstanceName'
  | 'childMdx___frontmatter___images___absolutePath'
  | 'childMdx___frontmatter___images___relativePath'
  | 'childMdx___frontmatter___images___extension'
  | 'childMdx___frontmatter___images___size'
  | 'childMdx___frontmatter___images___prettySize'
  | 'childMdx___frontmatter___images___modifiedTime'
  | 'childMdx___frontmatter___images___accessTime'
  | 'childMdx___frontmatter___images___changeTime'
  | 'childMdx___frontmatter___images___birthTime'
  | 'childMdx___frontmatter___images___root'
  | 'childMdx___frontmatter___images___dir'
  | 'childMdx___frontmatter___images___base'
  | 'childMdx___frontmatter___images___ext'
  | 'childMdx___frontmatter___images___name'
  | 'childMdx___frontmatter___images___relativeDirectory'
  | 'childMdx___frontmatter___images___dev'
  | 'childMdx___frontmatter___images___mode'
  | 'childMdx___frontmatter___images___nlink'
  | 'childMdx___frontmatter___images___uid'
  | 'childMdx___frontmatter___images___gid'
  | 'childMdx___frontmatter___images___rdev'
  | 'childMdx___frontmatter___images___ino'
  | 'childMdx___frontmatter___images___atimeMs'
  | 'childMdx___frontmatter___images___mtimeMs'
  | 'childMdx___frontmatter___images___ctimeMs'
  | 'childMdx___frontmatter___images___atime'
  | 'childMdx___frontmatter___images___mtime'
  | 'childMdx___frontmatter___images___ctime'
  | 'childMdx___frontmatter___images___birthtime'
  | 'childMdx___frontmatter___images___birthtimeMs'
  | 'childMdx___frontmatter___images___blksize'
  | 'childMdx___frontmatter___images___blocks'
  | 'childMdx___frontmatter___images___publicURL'
  | 'childMdx___frontmatter___images___childrenImageSharp'
  | 'childMdx___frontmatter___images___childrenMdx'
  | 'childMdx___frontmatter___images___id'
  | 'childMdx___frontmatter___images___children'
  | 'childMdx___frontmatter___embeddedImagesLocal'
  | 'childMdx___frontmatter___embeddedImagesLocal___sourceInstanceName'
  | 'childMdx___frontmatter___embeddedImagesLocal___absolutePath'
  | 'childMdx___frontmatter___embeddedImagesLocal___relativePath'
  | 'childMdx___frontmatter___embeddedImagesLocal___extension'
  | 'childMdx___frontmatter___embeddedImagesLocal___size'
  | 'childMdx___frontmatter___embeddedImagesLocal___prettySize'
  | 'childMdx___frontmatter___embeddedImagesLocal___modifiedTime'
  | 'childMdx___frontmatter___embeddedImagesLocal___accessTime'
  | 'childMdx___frontmatter___embeddedImagesLocal___changeTime'
  | 'childMdx___frontmatter___embeddedImagesLocal___birthTime'
  | 'childMdx___frontmatter___embeddedImagesLocal___root'
  | 'childMdx___frontmatter___embeddedImagesLocal___dir'
  | 'childMdx___frontmatter___embeddedImagesLocal___base'
  | 'childMdx___frontmatter___embeddedImagesLocal___ext'
  | 'childMdx___frontmatter___embeddedImagesLocal___name'
  | 'childMdx___frontmatter___embeddedImagesLocal___relativeDirectory'
  | 'childMdx___frontmatter___embeddedImagesLocal___dev'
  | 'childMdx___frontmatter___embeddedImagesLocal___mode'
  | 'childMdx___frontmatter___embeddedImagesLocal___nlink'
  | 'childMdx___frontmatter___embeddedImagesLocal___uid'
  | 'childMdx___frontmatter___embeddedImagesLocal___gid'
  | 'childMdx___frontmatter___embeddedImagesLocal___rdev'
  | 'childMdx___frontmatter___embeddedImagesLocal___ino'
  | 'childMdx___frontmatter___embeddedImagesLocal___atimeMs'
  | 'childMdx___frontmatter___embeddedImagesLocal___mtimeMs'
  | 'childMdx___frontmatter___embeddedImagesLocal___ctimeMs'
  | 'childMdx___frontmatter___embeddedImagesLocal___atime'
  | 'childMdx___frontmatter___embeddedImagesLocal___mtime'
  | 'childMdx___frontmatter___embeddedImagesLocal___ctime'
  | 'childMdx___frontmatter___embeddedImagesLocal___birthtime'
  | 'childMdx___frontmatter___embeddedImagesLocal___birthtimeMs'
  | 'childMdx___frontmatter___embeddedImagesLocal___blksize'
  | 'childMdx___frontmatter___embeddedImagesLocal___blocks'
  | 'childMdx___frontmatter___embeddedImagesLocal___publicURL'
  | 'childMdx___frontmatter___embeddedImagesLocal___childrenImageSharp'
  | 'childMdx___frontmatter___embeddedImagesLocal___childrenMdx'
  | 'childMdx___frontmatter___embeddedImagesLocal___id'
  | 'childMdx___frontmatter___embeddedImagesLocal___children'
  | 'childMdx___frontmatter___color'
  | 'childMdx___frontmatter___bgColor'
  | 'childMdx___frontmatter___titleColor'
  | 'childMdx___frontmatter___headerModifier'
  | 'childMdx___frontmatter___headerModiferMobile'
  | 'childMdx___frontmatter___removeBottomPadding'
  | 'childMdx___frontmatter___layout'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___tags'
  | 'childMdx___frontmatter___excerpt'
  | 'childMdx___frontmatter___categories'
  | 'childMdx___frontmatter___imageAltText'
  | 'childMdx___frontmatter___imageFullSize'
  | 'childMdx___frontmatter___client'
  | 'childMdx___frontmatter___role'
  | 'childMdx___frontmatter___headerModifierMobile'
  | 'childMdx___frontmatter___year'
  | 'childMdx___frontmatter___url'
  | 'childMdx___frontmatter___name'
  | 'childMdx___frontmatter___bgImageOpacity'
  | 'childMdx___frontmatter___bgImagePosition'
  | 'childMdx___frontmatter___bgImageSize'
  | 'childMdx___frontmatter___bgImageRepeat'
  | 'childMdx___frontmatter___bgImageBlendMode'
  | 'childMdx___frontmatter___ctaFontSize'
  | 'childMdx___frontmatter___ctaMaxWidth'
  | 'childMdx___frontmatter___ctaButtonStyles'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___fields___url'
  | 'childMdx___fields___date'
  | 'childMdx___fields___type'
  | 'childMdx___fields___client'
  | 'childMdx___fields___order'
  | 'childMdx___fields___slug'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<AuthorFilterInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SocialFilterInput>;
};

export type AuthorFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  summary?: Maybe<StringQueryOperatorInput>;
};

export type SocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  dribbble?: Maybe<StringQueryOperatorInput>;
};

export type SiteFlagsFilterInput = {
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<BooleanQueryOperatorInput>;
  PRESERVE_WEBPACK_CACHE?: Maybe<BooleanQueryOperatorInput>;
  DEV_SSR?: Maybe<BooleanQueryOperatorInput>;
  FAST_DEV?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author___name'
  | 'siteMetadata___author___summary'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___social___twitter'
  | 'siteMetadata___social___github'
  | 'siteMetadata___social___dribbble'
  | 'port'
  | 'host'
  | 'flags___PRESERVE_FILE_DOWNLOAD_CACHE'
  | 'flags___PRESERVE_WEBPACK_CACHE'
  | 'flags___DEV_SSR'
  | 'flags___FAST_DEV'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  previousPostId?: Maybe<StringQueryOperatorInput>;
  nextPostId?: Maybe<StringQueryOperatorInput>;
  breadcrumb?: Maybe<SitePageContextBreadcrumbFilterInput>;
};

export type SitePageContextBreadcrumbFilterInput = {
  location?: Maybe<StringQueryOperatorInput>;
  crumbs?: Maybe<SitePageContextBreadcrumbCrumbsFilterListInput>;
};

export type SitePageContextBreadcrumbCrumbsFilterListInput = {
  elemMatch?: Maybe<SitePageContextBreadcrumbCrumbsFilterInput>;
};

export type SitePageContextBreadcrumbCrumbsFilterInput = {
  pathname?: Maybe<StringQueryOperatorInput>;
  crumbLabel?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  postCssPlugins?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  remarkPlugins?: Maybe<SitePluginPluginOptionsRemarkPluginsFilterListInput>;
  rehypePlugins?: Maybe<SitePluginPluginOptionsRehypePluginsFilterListInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  defaults?: Maybe<SitePluginPluginOptionsDefaultsFilterInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  useAutoGen?: Maybe<BooleanQueryOperatorInput>;
  exclude?: Maybe<StringQueryOperatorInput>;
  trailingSlashes?: Maybe<BooleanQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsFilterInput = {
  postcssPlugin?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  dashes?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRehypePluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsRehypePluginsFilterInput>;
};

export type SitePluginPluginOptionsRehypePluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsDefaultsFilterInput = {
  formats?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  breakpoints?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  query?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'context___slug'
  | 'context___previousPostId'
  | 'context___nextPostId'
  | 'context___breadcrumb___location'
  | 'context___breadcrumb___crumbs'
  | 'context___breadcrumb___crumbs___pathname'
  | 'context___breadcrumb___crumbs___crumbLabel'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions___postCssPlugins'
  | 'pluginCreator___pluginOptions___postCssPlugins___postcssPlugin'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___gatsbyRemarkPlugins'
  | 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve'
  | 'pluginCreator___pluginOptions___remarkPlugins'
  | 'pluginCreator___pluginOptions___remarkPlugins___resolve'
  | 'pluginCreator___pluginOptions___rehypePlugins'
  | 'pluginCreator___pluginOptions___rehypePlugins___resolve'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___lessBabel'
  | 'pluginCreator___pluginOptions___mediaTypes'
  | 'pluginCreator___pluginOptions___root'
  | 'pluginCreator___pluginOptions___defaults___formats'
  | 'pluginCreator___pluginOptions___defaults___quality'
  | 'pluginCreator___pluginOptions___defaults___breakpoints'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___feeds'
  | 'pluginCreator___pluginOptions___feeds___query'
  | 'pluginCreator___pluginOptions___feeds___output'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___useAutoGen'
  | 'pluginCreator___pluginOptions___exclude'
  | 'pluginCreator___pluginOptions___trailingSlashes'
  | 'pluginCreator___pluginOptions___domain'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions___postCssPlugins'
  | 'pluginOptions___postCssPlugins___postcssPlugin'
  | 'pluginOptions___path'
  | 'pluginOptions___name'
  | 'pluginOptions___gatsbyRemarkPlugins'
  | 'pluginOptions___gatsbyRemarkPlugins___resolve'
  | 'pluginOptions___gatsbyRemarkPlugins___options___dashes'
  | 'pluginOptions___remarkPlugins'
  | 'pluginOptions___remarkPlugins___resolve'
  | 'pluginOptions___rehypePlugins'
  | 'pluginOptions___rehypePlugins___resolve'
  | 'pluginOptions___extensions'
  | 'pluginOptions___lessBabel'
  | 'pluginOptions___mediaTypes'
  | 'pluginOptions___root'
  | 'pluginOptions___defaults___formats'
  | 'pluginOptions___defaults___quality'
  | 'pluginOptions___defaults___breakpoints'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___query'
  | 'pluginOptions___feeds'
  | 'pluginOptions___feeds___query'
  | 'pluginOptions___feeds___output'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___useAutoGen'
  | 'pluginOptions___exclude'
  | 'pluginOptions___trailingSlashes'
  | 'pluginOptions___domain'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___description'
  | 'frontmatter___featured'
  | 'frontmatter___order'
  | 'frontmatter___thumbnail___sourceInstanceName'
  | 'frontmatter___thumbnail___absolutePath'
  | 'frontmatter___thumbnail___relativePath'
  | 'frontmatter___thumbnail___extension'
  | 'frontmatter___thumbnail___size'
  | 'frontmatter___thumbnail___prettySize'
  | 'frontmatter___thumbnail___modifiedTime'
  | 'frontmatter___thumbnail___accessTime'
  | 'frontmatter___thumbnail___changeTime'
  | 'frontmatter___thumbnail___birthTime'
  | 'frontmatter___thumbnail___root'
  | 'frontmatter___thumbnail___dir'
  | 'frontmatter___thumbnail___base'
  | 'frontmatter___thumbnail___ext'
  | 'frontmatter___thumbnail___name'
  | 'frontmatter___thumbnail___relativeDirectory'
  | 'frontmatter___thumbnail___dev'
  | 'frontmatter___thumbnail___mode'
  | 'frontmatter___thumbnail___nlink'
  | 'frontmatter___thumbnail___uid'
  | 'frontmatter___thumbnail___gid'
  | 'frontmatter___thumbnail___rdev'
  | 'frontmatter___thumbnail___ino'
  | 'frontmatter___thumbnail___atimeMs'
  | 'frontmatter___thumbnail___mtimeMs'
  | 'frontmatter___thumbnail___ctimeMs'
  | 'frontmatter___thumbnail___atime'
  | 'frontmatter___thumbnail___mtime'
  | 'frontmatter___thumbnail___ctime'
  | 'frontmatter___thumbnail___birthtime'
  | 'frontmatter___thumbnail___birthtimeMs'
  | 'frontmatter___thumbnail___blksize'
  | 'frontmatter___thumbnail___blocks'
  | 'frontmatter___thumbnail___publicURL'
  | 'frontmatter___thumbnail___childrenImageSharp'
  | 'frontmatter___thumbnail___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___thumbnail___childrenImageSharp___id'
  | 'frontmatter___thumbnail___childrenImageSharp___children'
  | 'frontmatter___thumbnail___childImageSharp___gatsbyImageData'
  | 'frontmatter___thumbnail___childImageSharp___id'
  | 'frontmatter___thumbnail___childImageSharp___children'
  | 'frontmatter___thumbnail___childrenMdx'
  | 'frontmatter___thumbnail___childrenMdx___rawBody'
  | 'frontmatter___thumbnail___childrenMdx___fileAbsolutePath'
  | 'frontmatter___thumbnail___childrenMdx___slug'
  | 'frontmatter___thumbnail___childrenMdx___body'
  | 'frontmatter___thumbnail___childrenMdx___excerpt'
  | 'frontmatter___thumbnail___childrenMdx___headings'
  | 'frontmatter___thumbnail___childrenMdx___html'
  | 'frontmatter___thumbnail___childrenMdx___mdxAST'
  | 'frontmatter___thumbnail___childrenMdx___tableOfContents'
  | 'frontmatter___thumbnail___childrenMdx___timeToRead'
  | 'frontmatter___thumbnail___childrenMdx___id'
  | 'frontmatter___thumbnail___childrenMdx___children'
  | 'frontmatter___thumbnail___childMdx___rawBody'
  | 'frontmatter___thumbnail___childMdx___fileAbsolutePath'
  | 'frontmatter___thumbnail___childMdx___slug'
  | 'frontmatter___thumbnail___childMdx___body'
  | 'frontmatter___thumbnail___childMdx___excerpt'
  | 'frontmatter___thumbnail___childMdx___headings'
  | 'frontmatter___thumbnail___childMdx___html'
  | 'frontmatter___thumbnail___childMdx___mdxAST'
  | 'frontmatter___thumbnail___childMdx___tableOfContents'
  | 'frontmatter___thumbnail___childMdx___timeToRead'
  | 'frontmatter___thumbnail___childMdx___id'
  | 'frontmatter___thumbnail___childMdx___children'
  | 'frontmatter___thumbnail___id'
  | 'frontmatter___thumbnail___parent___id'
  | 'frontmatter___thumbnail___parent___children'
  | 'frontmatter___thumbnail___children'
  | 'frontmatter___thumbnail___children___id'
  | 'frontmatter___thumbnail___children___children'
  | 'frontmatter___thumbnail___internal___content'
  | 'frontmatter___thumbnail___internal___contentDigest'
  | 'frontmatter___thumbnail___internal___description'
  | 'frontmatter___thumbnail___internal___fieldOwners'
  | 'frontmatter___thumbnail___internal___ignoreType'
  | 'frontmatter___thumbnail___internal___mediaType'
  | 'frontmatter___thumbnail___internal___owner'
  | 'frontmatter___thumbnail___internal___type'
  | 'frontmatter___image___sourceInstanceName'
  | 'frontmatter___image___absolutePath'
  | 'frontmatter___image___relativePath'
  | 'frontmatter___image___extension'
  | 'frontmatter___image___size'
  | 'frontmatter___image___prettySize'
  | 'frontmatter___image___modifiedTime'
  | 'frontmatter___image___accessTime'
  | 'frontmatter___image___changeTime'
  | 'frontmatter___image___birthTime'
  | 'frontmatter___image___root'
  | 'frontmatter___image___dir'
  | 'frontmatter___image___base'
  | 'frontmatter___image___ext'
  | 'frontmatter___image___name'
  | 'frontmatter___image___relativeDirectory'
  | 'frontmatter___image___dev'
  | 'frontmatter___image___mode'
  | 'frontmatter___image___nlink'
  | 'frontmatter___image___uid'
  | 'frontmatter___image___gid'
  | 'frontmatter___image___rdev'
  | 'frontmatter___image___ino'
  | 'frontmatter___image___atimeMs'
  | 'frontmatter___image___mtimeMs'
  | 'frontmatter___image___ctimeMs'
  | 'frontmatter___image___atime'
  | 'frontmatter___image___mtime'
  | 'frontmatter___image___ctime'
  | 'frontmatter___image___birthtime'
  | 'frontmatter___image___birthtimeMs'
  | 'frontmatter___image___blksize'
  | 'frontmatter___image___blocks'
  | 'frontmatter___image___publicURL'
  | 'frontmatter___image___childrenImageSharp'
  | 'frontmatter___image___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___image___childrenImageSharp___id'
  | 'frontmatter___image___childrenImageSharp___children'
  | 'frontmatter___image___childImageSharp___gatsbyImageData'
  | 'frontmatter___image___childImageSharp___id'
  | 'frontmatter___image___childImageSharp___children'
  | 'frontmatter___image___childrenMdx'
  | 'frontmatter___image___childrenMdx___rawBody'
  | 'frontmatter___image___childrenMdx___fileAbsolutePath'
  | 'frontmatter___image___childrenMdx___slug'
  | 'frontmatter___image___childrenMdx___body'
  | 'frontmatter___image___childrenMdx___excerpt'
  | 'frontmatter___image___childrenMdx___headings'
  | 'frontmatter___image___childrenMdx___html'
  | 'frontmatter___image___childrenMdx___mdxAST'
  | 'frontmatter___image___childrenMdx___tableOfContents'
  | 'frontmatter___image___childrenMdx___timeToRead'
  | 'frontmatter___image___childrenMdx___id'
  | 'frontmatter___image___childrenMdx___children'
  | 'frontmatter___image___childMdx___rawBody'
  | 'frontmatter___image___childMdx___fileAbsolutePath'
  | 'frontmatter___image___childMdx___slug'
  | 'frontmatter___image___childMdx___body'
  | 'frontmatter___image___childMdx___excerpt'
  | 'frontmatter___image___childMdx___headings'
  | 'frontmatter___image___childMdx___html'
  | 'frontmatter___image___childMdx___mdxAST'
  | 'frontmatter___image___childMdx___tableOfContents'
  | 'frontmatter___image___childMdx___timeToRead'
  | 'frontmatter___image___childMdx___id'
  | 'frontmatter___image___childMdx___children'
  | 'frontmatter___image___id'
  | 'frontmatter___image___parent___id'
  | 'frontmatter___image___parent___children'
  | 'frontmatter___image___children'
  | 'frontmatter___image___children___id'
  | 'frontmatter___image___children___children'
  | 'frontmatter___image___internal___content'
  | 'frontmatter___image___internal___contentDigest'
  | 'frontmatter___image___internal___description'
  | 'frontmatter___image___internal___fieldOwners'
  | 'frontmatter___image___internal___ignoreType'
  | 'frontmatter___image___internal___mediaType'
  | 'frontmatter___image___internal___owner'
  | 'frontmatter___image___internal___type'
  | 'frontmatter___bgImage___sourceInstanceName'
  | 'frontmatter___bgImage___absolutePath'
  | 'frontmatter___bgImage___relativePath'
  | 'frontmatter___bgImage___extension'
  | 'frontmatter___bgImage___size'
  | 'frontmatter___bgImage___prettySize'
  | 'frontmatter___bgImage___modifiedTime'
  | 'frontmatter___bgImage___accessTime'
  | 'frontmatter___bgImage___changeTime'
  | 'frontmatter___bgImage___birthTime'
  | 'frontmatter___bgImage___root'
  | 'frontmatter___bgImage___dir'
  | 'frontmatter___bgImage___base'
  | 'frontmatter___bgImage___ext'
  | 'frontmatter___bgImage___name'
  | 'frontmatter___bgImage___relativeDirectory'
  | 'frontmatter___bgImage___dev'
  | 'frontmatter___bgImage___mode'
  | 'frontmatter___bgImage___nlink'
  | 'frontmatter___bgImage___uid'
  | 'frontmatter___bgImage___gid'
  | 'frontmatter___bgImage___rdev'
  | 'frontmatter___bgImage___ino'
  | 'frontmatter___bgImage___atimeMs'
  | 'frontmatter___bgImage___mtimeMs'
  | 'frontmatter___bgImage___ctimeMs'
  | 'frontmatter___bgImage___atime'
  | 'frontmatter___bgImage___mtime'
  | 'frontmatter___bgImage___ctime'
  | 'frontmatter___bgImage___birthtime'
  | 'frontmatter___bgImage___birthtimeMs'
  | 'frontmatter___bgImage___blksize'
  | 'frontmatter___bgImage___blocks'
  | 'frontmatter___bgImage___publicURL'
  | 'frontmatter___bgImage___childrenImageSharp'
  | 'frontmatter___bgImage___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___bgImage___childrenImageSharp___id'
  | 'frontmatter___bgImage___childrenImageSharp___children'
  | 'frontmatter___bgImage___childImageSharp___gatsbyImageData'
  | 'frontmatter___bgImage___childImageSharp___id'
  | 'frontmatter___bgImage___childImageSharp___children'
  | 'frontmatter___bgImage___childrenMdx'
  | 'frontmatter___bgImage___childrenMdx___rawBody'
  | 'frontmatter___bgImage___childrenMdx___fileAbsolutePath'
  | 'frontmatter___bgImage___childrenMdx___slug'
  | 'frontmatter___bgImage___childrenMdx___body'
  | 'frontmatter___bgImage___childrenMdx___excerpt'
  | 'frontmatter___bgImage___childrenMdx___headings'
  | 'frontmatter___bgImage___childrenMdx___html'
  | 'frontmatter___bgImage___childrenMdx___mdxAST'
  | 'frontmatter___bgImage___childrenMdx___tableOfContents'
  | 'frontmatter___bgImage___childrenMdx___timeToRead'
  | 'frontmatter___bgImage___childrenMdx___id'
  | 'frontmatter___bgImage___childrenMdx___children'
  | 'frontmatter___bgImage___childMdx___rawBody'
  | 'frontmatter___bgImage___childMdx___fileAbsolutePath'
  | 'frontmatter___bgImage___childMdx___slug'
  | 'frontmatter___bgImage___childMdx___body'
  | 'frontmatter___bgImage___childMdx___excerpt'
  | 'frontmatter___bgImage___childMdx___headings'
  | 'frontmatter___bgImage___childMdx___html'
  | 'frontmatter___bgImage___childMdx___mdxAST'
  | 'frontmatter___bgImage___childMdx___tableOfContents'
  | 'frontmatter___bgImage___childMdx___timeToRead'
  | 'frontmatter___bgImage___childMdx___id'
  | 'frontmatter___bgImage___childMdx___children'
  | 'frontmatter___bgImage___id'
  | 'frontmatter___bgImage___parent___id'
  | 'frontmatter___bgImage___parent___children'
  | 'frontmatter___bgImage___children'
  | 'frontmatter___bgImage___children___id'
  | 'frontmatter___bgImage___children___children'
  | 'frontmatter___bgImage___internal___content'
  | 'frontmatter___bgImage___internal___contentDigest'
  | 'frontmatter___bgImage___internal___description'
  | 'frontmatter___bgImage___internal___fieldOwners'
  | 'frontmatter___bgImage___internal___ignoreType'
  | 'frontmatter___bgImage___internal___mediaType'
  | 'frontmatter___bgImage___internal___owner'
  | 'frontmatter___bgImage___internal___type'
  | 'frontmatter___images'
  | 'frontmatter___images___sourceInstanceName'
  | 'frontmatter___images___absolutePath'
  | 'frontmatter___images___relativePath'
  | 'frontmatter___images___extension'
  | 'frontmatter___images___size'
  | 'frontmatter___images___prettySize'
  | 'frontmatter___images___modifiedTime'
  | 'frontmatter___images___accessTime'
  | 'frontmatter___images___changeTime'
  | 'frontmatter___images___birthTime'
  | 'frontmatter___images___root'
  | 'frontmatter___images___dir'
  | 'frontmatter___images___base'
  | 'frontmatter___images___ext'
  | 'frontmatter___images___name'
  | 'frontmatter___images___relativeDirectory'
  | 'frontmatter___images___dev'
  | 'frontmatter___images___mode'
  | 'frontmatter___images___nlink'
  | 'frontmatter___images___uid'
  | 'frontmatter___images___gid'
  | 'frontmatter___images___rdev'
  | 'frontmatter___images___ino'
  | 'frontmatter___images___atimeMs'
  | 'frontmatter___images___mtimeMs'
  | 'frontmatter___images___ctimeMs'
  | 'frontmatter___images___atime'
  | 'frontmatter___images___mtime'
  | 'frontmatter___images___ctime'
  | 'frontmatter___images___birthtime'
  | 'frontmatter___images___birthtimeMs'
  | 'frontmatter___images___blksize'
  | 'frontmatter___images___blocks'
  | 'frontmatter___images___publicURL'
  | 'frontmatter___images___childrenImageSharp'
  | 'frontmatter___images___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___images___childrenImageSharp___id'
  | 'frontmatter___images___childrenImageSharp___children'
  | 'frontmatter___images___childImageSharp___gatsbyImageData'
  | 'frontmatter___images___childImageSharp___id'
  | 'frontmatter___images___childImageSharp___children'
  | 'frontmatter___images___childrenMdx'
  | 'frontmatter___images___childrenMdx___rawBody'
  | 'frontmatter___images___childrenMdx___fileAbsolutePath'
  | 'frontmatter___images___childrenMdx___slug'
  | 'frontmatter___images___childrenMdx___body'
  | 'frontmatter___images___childrenMdx___excerpt'
  | 'frontmatter___images___childrenMdx___headings'
  | 'frontmatter___images___childrenMdx___html'
  | 'frontmatter___images___childrenMdx___mdxAST'
  | 'frontmatter___images___childrenMdx___tableOfContents'
  | 'frontmatter___images___childrenMdx___timeToRead'
  | 'frontmatter___images___childrenMdx___id'
  | 'frontmatter___images___childrenMdx___children'
  | 'frontmatter___images___childMdx___rawBody'
  | 'frontmatter___images___childMdx___fileAbsolutePath'
  | 'frontmatter___images___childMdx___slug'
  | 'frontmatter___images___childMdx___body'
  | 'frontmatter___images___childMdx___excerpt'
  | 'frontmatter___images___childMdx___headings'
  | 'frontmatter___images___childMdx___html'
  | 'frontmatter___images___childMdx___mdxAST'
  | 'frontmatter___images___childMdx___tableOfContents'
  | 'frontmatter___images___childMdx___timeToRead'
  | 'frontmatter___images___childMdx___id'
  | 'frontmatter___images___childMdx___children'
  | 'frontmatter___images___id'
  | 'frontmatter___images___parent___id'
  | 'frontmatter___images___parent___children'
  | 'frontmatter___images___children'
  | 'frontmatter___images___children___id'
  | 'frontmatter___images___children___children'
  | 'frontmatter___images___internal___content'
  | 'frontmatter___images___internal___contentDigest'
  | 'frontmatter___images___internal___description'
  | 'frontmatter___images___internal___fieldOwners'
  | 'frontmatter___images___internal___ignoreType'
  | 'frontmatter___images___internal___mediaType'
  | 'frontmatter___images___internal___owner'
  | 'frontmatter___images___internal___type'
  | 'frontmatter___embeddedImagesLocal'
  | 'frontmatter___embeddedImagesLocal___sourceInstanceName'
  | 'frontmatter___embeddedImagesLocal___absolutePath'
  | 'frontmatter___embeddedImagesLocal___relativePath'
  | 'frontmatter___embeddedImagesLocal___extension'
  | 'frontmatter___embeddedImagesLocal___size'
  | 'frontmatter___embeddedImagesLocal___prettySize'
  | 'frontmatter___embeddedImagesLocal___modifiedTime'
  | 'frontmatter___embeddedImagesLocal___accessTime'
  | 'frontmatter___embeddedImagesLocal___changeTime'
  | 'frontmatter___embeddedImagesLocal___birthTime'
  | 'frontmatter___embeddedImagesLocal___root'
  | 'frontmatter___embeddedImagesLocal___dir'
  | 'frontmatter___embeddedImagesLocal___base'
  | 'frontmatter___embeddedImagesLocal___ext'
  | 'frontmatter___embeddedImagesLocal___name'
  | 'frontmatter___embeddedImagesLocal___relativeDirectory'
  | 'frontmatter___embeddedImagesLocal___dev'
  | 'frontmatter___embeddedImagesLocal___mode'
  | 'frontmatter___embeddedImagesLocal___nlink'
  | 'frontmatter___embeddedImagesLocal___uid'
  | 'frontmatter___embeddedImagesLocal___gid'
  | 'frontmatter___embeddedImagesLocal___rdev'
  | 'frontmatter___embeddedImagesLocal___ino'
  | 'frontmatter___embeddedImagesLocal___atimeMs'
  | 'frontmatter___embeddedImagesLocal___mtimeMs'
  | 'frontmatter___embeddedImagesLocal___ctimeMs'
  | 'frontmatter___embeddedImagesLocal___atime'
  | 'frontmatter___embeddedImagesLocal___mtime'
  | 'frontmatter___embeddedImagesLocal___ctime'
  | 'frontmatter___embeddedImagesLocal___birthtime'
  | 'frontmatter___embeddedImagesLocal___birthtimeMs'
  | 'frontmatter___embeddedImagesLocal___blksize'
  | 'frontmatter___embeddedImagesLocal___blocks'
  | 'frontmatter___embeddedImagesLocal___publicURL'
  | 'frontmatter___embeddedImagesLocal___childrenImageSharp'
  | 'frontmatter___embeddedImagesLocal___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___embeddedImagesLocal___childrenImageSharp___id'
  | 'frontmatter___embeddedImagesLocal___childrenImageSharp___children'
  | 'frontmatter___embeddedImagesLocal___childImageSharp___gatsbyImageData'
  | 'frontmatter___embeddedImagesLocal___childImageSharp___id'
  | 'frontmatter___embeddedImagesLocal___childImageSharp___children'
  | 'frontmatter___embeddedImagesLocal___childrenMdx'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___rawBody'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___fileAbsolutePath'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___slug'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___body'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___excerpt'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___headings'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___html'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___mdxAST'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___tableOfContents'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___timeToRead'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___id'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___children'
  | 'frontmatter___embeddedImagesLocal___childMdx___rawBody'
  | 'frontmatter___embeddedImagesLocal___childMdx___fileAbsolutePath'
  | 'frontmatter___embeddedImagesLocal___childMdx___slug'
  | 'frontmatter___embeddedImagesLocal___childMdx___body'
  | 'frontmatter___embeddedImagesLocal___childMdx___excerpt'
  | 'frontmatter___embeddedImagesLocal___childMdx___headings'
  | 'frontmatter___embeddedImagesLocal___childMdx___html'
  | 'frontmatter___embeddedImagesLocal___childMdx___mdxAST'
  | 'frontmatter___embeddedImagesLocal___childMdx___tableOfContents'
  | 'frontmatter___embeddedImagesLocal___childMdx___timeToRead'
  | 'frontmatter___embeddedImagesLocal___childMdx___id'
  | 'frontmatter___embeddedImagesLocal___childMdx___children'
  | 'frontmatter___embeddedImagesLocal___id'
  | 'frontmatter___embeddedImagesLocal___parent___id'
  | 'frontmatter___embeddedImagesLocal___parent___children'
  | 'frontmatter___embeddedImagesLocal___children'
  | 'frontmatter___embeddedImagesLocal___children___id'
  | 'frontmatter___embeddedImagesLocal___children___children'
  | 'frontmatter___embeddedImagesLocal___internal___content'
  | 'frontmatter___embeddedImagesLocal___internal___contentDigest'
  | 'frontmatter___embeddedImagesLocal___internal___description'
  | 'frontmatter___embeddedImagesLocal___internal___fieldOwners'
  | 'frontmatter___embeddedImagesLocal___internal___ignoreType'
  | 'frontmatter___embeddedImagesLocal___internal___mediaType'
  | 'frontmatter___embeddedImagesLocal___internal___owner'
  | 'frontmatter___embeddedImagesLocal___internal___type'
  | 'frontmatter___color'
  | 'frontmatter___bgColor'
  | 'frontmatter___titleColor'
  | 'frontmatter___headerModifier'
  | 'frontmatter___headerModiferMobile'
  | 'frontmatter___removeBottomPadding'
  | 'frontmatter___layout'
  | 'frontmatter___date'
  | 'frontmatter___tags'
  | 'frontmatter___excerpt'
  | 'frontmatter___categories'
  | 'frontmatter___imageAltText'
  | 'frontmatter___imageFullSize'
  | 'frontmatter___client'
  | 'frontmatter___role'
  | 'frontmatter___headerModifierMobile'
  | 'frontmatter___year'
  | 'frontmatter___url'
  | 'frontmatter___name'
  | 'frontmatter___bgImageOpacity'
  | 'frontmatter___bgImagePosition'
  | 'frontmatter___bgImageSize'
  | 'frontmatter___bgImageRepeat'
  | 'frontmatter___bgImageBlendMode'
  | 'frontmatter___ctaFontSize'
  | 'frontmatter___ctaMaxWidth'
  | 'frontmatter___ctaButtonStyles'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'fields___url'
  | 'fields___date'
  | 'fields___type'
  | 'fields___client'
  | 'fields___order'
  | 'fields___slug'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { studies: { nodes: Array<StudyFragment> } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = SiteMetadataFragment;

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = SiteMetadataFragment;

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_5_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }>, posts: { nodes: Array<ArticleFragment> }, studies: { nodes: Array<StudyFragment> }, projects: { nodes: Array<{ frontmatter?: Maybe<Pick<Frontmatter, 'title' | 'description' | 'url'>> }> } };

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_6_Query = { allMdx: { nodes: Array<ArticleFragment> } };

export type BlogPostByIdQueryVariables = Exact<{
  id: Scalars['String'];
  previousPostId?: Maybe<Scalars['String']>;
  nextPostId?: Maybe<Scalars['String']>;
}>;


export type BlogPostByIdQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, mdx?: Maybe<ArticleFragment>, previous?: Maybe<PostSiblingFragment>, next?: Maybe<PostSiblingFragment> };

export type CaseStudyByIdQueryVariables = Exact<{
  id: Scalars['String'];
  slug: Scalars['String'];
  previousPostId?: Maybe<Scalars['String']>;
  nextPostId?: Maybe<Scalars['String']>;
}>;


export type CaseStudyByIdQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, study?: Maybe<StudyFragment>, previous?: Maybe<PostSiblingFragment>, next?: Maybe<PostSiblingFragment>, sections: { nodes: Array<StudySectionFragment> } };

export type ArticleFragment = (
  Pick<Mdx, 'id' | 'excerpt' | 'body' | 'timeToRead'>
  & { frontmatter?: Maybe<(
    Pick<Frontmatter, 'title' | 'date' | 'description' | 'imageAltText' | 'imageFullSize' | 'headerModifier' | 'headerModifierMobile'>
    & { embeddedImagesLocal?: Maybe<Array<Maybe<ImageFragment>>>, image?: Maybe<ImageFragment> }
  )>, fields?: Maybe<Pick<Fields, 'url' | 'date' | 'type'>> }
);

export type ImageFragment = (
  Pick<File, 'publicURL'>
  & { childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }
);

export type PostSiblingFragment = (
  Pick<Mdx, 'slug'>
  & { frontmatter?: Maybe<(
    Pick<Frontmatter, 'title' | 'client'>
    & { image?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
  )>, fields?: Maybe<Pick<Fields, 'url'>> }
);

export type SiteMetadataFragment = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'description' | 'siteUrl'>
      & { author?: Maybe<Pick<Author, 'name' | 'summary'>>, social?: Maybe<Pick<Social, 'github' | 'twitter' | 'dribbble'>> }
    )> }> };

export type StudySectionFragment = (
  Pick<Mdx, 'body'>
  & { frontmatter?: Maybe<(
    Pick<Frontmatter, 'name' | 'title' | 'client' | 'bgColor' | 'bgImageBlendMode' | 'bgImageOpacity' | 'bgImagePosition' | 'bgImageSize' | 'bgImageRepeat' | 'color' | 'titleColor' | 'headerModifier' | 'headerModifierMobile' | 'removeBottomPadding'>
    & { embeddedImagesLocal?: Maybe<Array<Maybe<ImageFragment>>>, bgImage?: Maybe<ImageFragment> }
  )>, fields?: Maybe<Pick<Fields, 'slug'>> }
);

export type StudyFragment = (
  Pick<Mdx, 'id' | 'slug' | 'body' | 'timeToRead'>
  & { frontmatter?: Maybe<(
    Pick<Frontmatter, 'title' | 'client' | 'url' | 'role' | 'year' | 'description' | 'order' | 'headerModifier' | 'headerModifierMobile' | 'bgColor' | 'titleColor' | 'ctaFontSize' | 'ctaMaxWidth' | 'ctaButtonStyles'>
    & { thumbnail?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, image?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, embeddedImagesLocal?: Maybe<Array<Maybe<(
      Pick<File, 'publicURL'>
      & { childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }
    )>>> }
  )>, fields?: Maybe<Pick<Fields, 'url' | 'type'>> }
);
