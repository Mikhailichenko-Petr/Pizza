

function Categories ({tip,onClick}){

 return(
    <div className="categories">
            <ul>
              <li className="active">Все</li>
              {
              tip.map((item,index) => <li onClick={()=> onClick(item)} key={`${item}_${index}`}>{item}</li>)
              }
            </ul>
    </div>
 )
}
export default Categories