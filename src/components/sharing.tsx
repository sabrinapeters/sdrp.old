export interface ISharingURLProps {
  link: string;
  title: string;
  className?: string;
}

export function PostSharingUrl(props: ISharingURLProps) {
  var text = encodeURIComponent(props.title + " | Charlie Peters");
  var url = encodeURIComponent(props.link);
  const TwitterLink =
    "https://twitter.com/intent/tweet/?text=" + text + "&url=" + url;

  return (
    <div className={props.className}>
      <h5 className="mb-4 font-bold text-md">Share this Post</h5>

      <ul>
        <li>
          <a href={props.link}>Link</a>
        </li>
        <li>
          <a href={TwitterLink}>Twitter</a>
        </li>
      </ul>
    </div>
  );
}
