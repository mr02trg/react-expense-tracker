import './Card.css'

const Card = (props) => {
  const classes = `my-card ${props.color ? 'my-card-' + props.color : null}`
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;