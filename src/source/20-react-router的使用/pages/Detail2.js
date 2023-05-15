import React from 'react'
import { useLocation, useParams,useSearchParams } from 'react-router-dom';

export default function Detail2(props) {
  const result = useLocation();
  // result打印出来结果如下所示：
  //  {"pathname":"/detail2","search":"?grade=10&type=11","hash":"","state":{"name":"evan","age":20,"sex":"male"},"key":"lbm5m68n"}
  console.log("state is ",JSON.stringify(result));
  const { state : { name ,age , sex } } = result;
  return (
    <div>
      {
        'name is ' + name + ' ' + age + ' ' + sex + ' '
      }
    </div>
  )
}
