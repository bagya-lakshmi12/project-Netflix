import React from 'react'
import "./Btn.css";

const Btn = ({height1, position1, value1, bg1, color1, size1, radius1,
   value2, height2, position2, bg2, color2, size2, radius2,
   val3, height3, position3, bg3, color3, size3, radius3,
   val4, height4, position4, bg4, color4, size4, radius4,
  val5,height5, height52, height55, height6, height7, val6, height8, height9,
color0, bg0, value0, icon0, size0, home, home1,}) => {
  return (
    <div>
      <button className={`${color0} ${bg0} ${value0} ${icon0} ${size0} ${home} ${home1} ${height1} ${position1} ${value1} ${bg1} ${color1} ${size1} ${radius1} 
      ${height2} ${position2} ${value2} ${bg2} ${color2} ${size2} ${radius2}
      ${height3} ${position3} ${val3} ${bg3} ${color3} ${size3} ${radius3}
      ${height4} ${position4} ${val4} ${bg4} ${color4} ${size4} ${radius4}
      ${val5} ${height5} ${height52} ${height55} ${height6} ${height7} ${height8} ${height9} `}>{value0} {value1} {value2} {val3} {val4} {val5} {val6}</button>
    </div>
  )
}

export default Btn
