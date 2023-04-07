import styled from 'styled-components'

const HomeWrapper = styled.div`
  font-size : 25px;
  color : blue;

  .banner{
    background-color: orange;
    font-size: 50px;

    span{
      text-decoration: underline;

      //当前span元素，同时也是active的时候，注意前面需要加上 &
      &.active{
        color: white 
      }

      //伪类
      &:hover{
        color: #000;
      }

      //伪元素-在span元素后面拼接上content  
      &::after{
        content: 'aabbcc';
      }
    }

    //写法1: .banner 下面的 .active
    /* .active{
      color: yellow;
    } */
  }
`

const TitleWrapper = styled.h2`
  text-decoration:underline;

  /* 共享的样式，可以通过theme来设置一些共享的主题颜色 */
  color : ${props => props.theme.themeColor};
  font-size: ${props => props.theme.fontSize};

`

export {
  HomeWrapper,
  TitleWrapper
}