import React , { useState } from 'react'

/**
 * useState值的使用
 * @returns 
 */
export default function ComplexHook() {
  const [friends, setFriends] = useState(['Amy','wuha','mini'])
  const [students, setStudents] = useState([
    {name  : 'aaa' , age : 28 },
    {name  : 'bbb' , age : 29 },
    {name  : 'ccc' , age : 30 }
  ])

  const   ageClick = (index) => {
    // 浅拷贝
    const newArray = [...students];
    //  取出数组中的item，并进行修改其值
    newArray[index].age += 1;
    setStudents(newArray)
  }

  return (
    <div>
      <h2>friends展示</h2>
      <ul>
        {
          friends.map((item,index)=>{
            return (
              <li>
                {
                  item
                }
              </li>
            )
          })
        }
      </ul>
      <button onClick={()=>{
        setFriends([...friends,'hahah'])
      }}>
        Click Me
      </button>

      <h2>学生列表</h2>
      <ul>
      {
        students.map((item,index)=>{
          return (
            <li>
              {
                <span>
                  {'name is ' + item.name + ' , ' + ' age is ' + item.age}
                  <button onClick={(e)=>ageClick(index)}>age + 1</button>
                </span>              
              }
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}
