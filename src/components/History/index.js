import './index.css'

const History = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="card-container">
      <p className="time">{timeAccessed}</p>
      <img className="img1" src={logoUrl} alt="domain logo" />
      <p className="time"> {title} </p>
      <p className="time"> {domainUrl} </p>
      <button className="delete " type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default History
