function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items to the list! </em>
      </footer>
    );
  }

  const totalItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go"
          : `You have ${totalItems} items on your list, and you already packed
          ${itemsPacked} (${percentage} %)`}
      </em>
    </footer>
  );
}

export default Stats;
