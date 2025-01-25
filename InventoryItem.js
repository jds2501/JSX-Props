function InventoryItem({ name, type, quantity = 10, price = 20.00 }) {
	let lowQuantityMsg;
	let highValueWarning;

	if (quantity < 5) {
		lowQuantityMsg = <Message>{`⚠️Low Stock! ${quantity} remained.`}</Message>;
	}

	if ((quantity * price) > 1000) {
		highValueWarning = <Message>{`💰High value - consider extra protection!`}</Message>
	}

	return (
		<div>
			<h2>{`${name} (${type})`}</h2>
			{lowQuantityMsg}
			{highValueWarning}
		</div>
	);
}
