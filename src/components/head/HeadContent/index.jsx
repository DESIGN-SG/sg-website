import MetaTags from './../MetaTags'
import LinkTags from './../link/LinkTags'

export default function HeadContent(props) {  
  return (
    <>
      <MetaTags {...props} />
      <LinkTags />
    </>
  );
}