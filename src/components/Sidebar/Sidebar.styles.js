import styled from '@emotion/styled';


export const SidebarContainer=styled.div`
width:${p=>p.isSidebarOpen? '20%' : '5%'};
color:yellow;
min-width:80px;
max-width:280px;
background-image: linear-gradient(315deg,rgba(252, 82, 150 ,0.8) 0%, 
rgba(246, 112, 98, 0.8) 74%),url(${props=>props.backgroundImage});

background-size:cover;
background-repeact:no-repeat;
background-postion :center center;
position:relative;

`
export const SidebarHeader=styled.h3`
padding:20px 0;
text-align:center;
nargin-bottom:10px;
letter-spacing:6px;
font-family:${p=>p.font}
`

export const MenuItemContainer=styled.div`
`

export const MenuItem=styled.div`
padding:6px 20px;
font-weight:600;
color:${p=>p.selected ?'rgba(255,255,255)':"rgba(19,15,64)"};
font-family:${p=>p.font};

&:hover{
  color:rgba(255,255,255);
  transition: .1s ease-in all;
}

&:after {
    content: "";
    border:1px solid ${p=>p.selected ?'rgba(255,255,255)':"rgba(19,15,64)"};
   display:block;
    margin:8px 0 4px;
  };

${p=>!p.selected &&`
&:hover{
  &:after{
    border:1px solid rgba(255,255,255, 0.2);
    transition: .1s ease-in all;
  }
}
` }

`

export const Text=styled.p`
display:inline;
`
export const Icon=styled.img`
height:16px;
width:16px;
padding-right:20px;
`

// Toggler -------------------------

export const TogglerContainer=styled.div`
positon:absolute;
width:30%;
bottom:10%;
left:0;
right:0;
margin:0 auto;
`

export const Toggler=styled.div`
height:40px;
cursor:pointer;
margin-top:100px;
position:relative;

&:after {
  content:'';
  position:absolute;
  left:0;
  top:.25em;
  width:100%;
  height:.1em;
  background:#fff;
  box-shadow:0 .75em 0 0 #fff, 
            0 1.5em 0 0 #fff;


}
`