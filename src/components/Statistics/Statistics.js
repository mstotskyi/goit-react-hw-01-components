import PropTypes from 'prop-types';


export function Statistics ({title, stats}){

    return(
<section >
  {title ? <h2 >{title}</h2> : <h2  style={{display: 'none'}}>{title}</h2>}

  <ul >
    {stats.map(statsItem => 
    <li key={statsItem.id}>
      <span >{statsItem.label}</span>
      <span >{statsItem.percentage}</span>
    </li>)}
  </ul>
</section>
    )

    
}



Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    }))

}