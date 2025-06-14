export default function MetaTags({ title, description }) {  
  return (
    <>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
    </>
  );
}