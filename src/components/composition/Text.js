export default function Text({ addEmoji }) {
  const text = 'I am JavaScript Programming Language';

  return <div>{addEmoji ? addEmoji('text', 'emoji') : text}</div>;
}
