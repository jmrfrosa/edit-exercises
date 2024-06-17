const statusToColorDict = {
  draft: { color: 'blue', textColor: 'white' },
  processing: { color: 'yellow', textColor: 'black' },
  cancelled: { color: 'red', textColor: 'white' },
  shipped: { color: 'green', textColor: 'white' },
}

export const OrderStatus = ({ status }) => {
  const statusStyle = statusToColorDict[status]

  return (
    <div
      style={{
        backgroundColor: statusStyle.color,
        padding: '5px',
        color: statusStyle.textColor,
      }}
    >
      {status}
    </div>
  )
}
