import MetaTags from './../MetaTags'
import LinkTags from './../link/LinkTags'

export default function HeadContent() {  
  return (
    <>
      <MetaTags title="タイトル" description="ディスクリプション" />
      <LinkTags />
    </>
  );
}