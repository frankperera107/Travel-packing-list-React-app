export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>
          Start adding some items to your packing list and get ready to go on
          trip mode 😍✈️😍
        </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = (numPacked / numItems) * 100;

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything packed 💪✈️💪"
          : `You have {numItems} items on your list, and you already packed{" "}
        ${numPacked} items. (${packedPercentage}% completed.)`}
      </em>
    </footer>
  );
}
