import React, { RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { SortPayload } from "../redux/redusers/filters/type";

export type Payload={
  name:string,
  type:string,
  order:string
}
 type find={
  find:any
 }
interface SortPopupType{
  sortItems:Payload[],
  activeSortType:string,
  onClickSort:(index:SortPayload)=>void
}

type MouseEventType = MouseEvent & {
  path: Node[];
}


const SortPopup:React.FC<SortPopupType> = React.memo(function SortPopup({sortItems,activeSortType,onClickSort}) {
  const sortItemFind = sortItems as find
  const [state, setState] = useState(false);
  const refElem = useRef<HTMLDivElement>(null) ;
  console.log(sortItems,'www');
  const nameSort = sortItemFind.find((obj:Payload) => obj.type === activeSortType).name;
  console.log(nameSort,'nameSort');

  const togglePopup = () => {
    setState(!state);
  };



  

  const IndexClassActive = (index:SortPayload) => {
    onClickSort(index);
    setState(false);
  };

  useEffect(() => {
      const handleClick = (e:MouseEvent) => {
        console.log('mont')
     const _event = e as MouseEventType
      if (refElem.current && !_event.composedPath().includes(refElem.current)) {
        setState(false);
      }
  };
    document.body.addEventListener("click", handleClick);
    return () => {
      console.log('unmount')
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={refElem} className="sort">
      <div onClick={togglePopup} className="sort__label">
        <svg
          className={state ? "rotated" : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span >{nameSort}</span>
      </div>
      {state && (
        <div className="sort__popup">
          <ul>
            {sortItems &&
              sortItems.map((obj, index) => (
                <li
                  className={activeSortType === obj.type ? "active" : ""}
                  onClick={() => IndexClassActive(obj)}
                  key={`${obj.type}_${index}`}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

// SortPopup.propTypes = {
//   activeSortType: PropTypes.string.isRequired,
//   tip: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onClickSort: PropTypes.func.isRequired,
// };

// SortPopup.defaultProps = {
//   tip: [],
// };

export default SortPopup;
