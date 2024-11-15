const Service = ({ icon, title, text, hide }) => {
  return (

      <article className='service'>
        <span className='service-icon'>
          <i className={icon}></i>
        </span>
        <div className='service-info'>
          <h4 className='service-title'>{title}</h4>
          <p className='service-text'>{text}</p>
        </div>
        <div className="hide" onClick={hide}>Hide</div>
      </article>


  )
}
export default Service