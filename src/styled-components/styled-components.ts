import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 150px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #2f2e2e;
`;

export const ColumnContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

export const Column = styled.div`
  padding: 10px 10px 0;
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #1f1d1d;
`;

interface IHeaderProps {
    bgc: string;
}

export const Header = styled.div<IHeaderProps> `
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.bgc || 'white'};
  color: white;
  font-size: 20px;
  box-sizing: border-box;
`

export const Card = styled.div`
  width: 100%;
  min-height: 150px;
  margin-bottom: 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  background-color: #0c0b0b;
  box-sizing: border-box;

  :hover {
    cursor: move;
  }

  :active {
    cursor: grabbing;
  }
`

export const CardBody = styled.div`
  position: relative;
  color: #bbb8b8;
`

export const CardButton = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  color: #bbb8b8;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }

  :active {
    color: #bbb8b890;
  }
`;

export const AddButton = styled.button`
  margin-right: 10px;
  padding: 5px 20px;
  background: #474545;
  border: none;
  color: #bbb8b8;
  font-size: 16px;

  :active {
    background: #47454590;
  }

  :hover {
    cursor: pointer;
  }
`;

export const AddButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #1f1d1d;

`;

export const AddInput = styled.textarea`
  padding: 10px;
  min-height: 100px;
  height: auto;
  margin-bottom: 10px;
  background-color: #474545;
  border: none;
  resize: none;
  color: #bbb8b8;
  font-size: 16px;

  :focus {
    outline: none;
  }
`;

export const CloseWrap = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const HeaderContainer = styled.ul`
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #2f2e2e;
  border-bottom: 1px solid #474545;
  list-style-type: none;
`;

export const LinkItem = styled.li`
  margin-right: 20px;
  font-size: 16px;

  a {
    color: #bbb8b8;
    text-decoration: none;

    :hover {
      cursor: pointer;
      color: #bbb8b890;
    }
  }

  :first-child {
    margin-right: auto;
  }
`;

export const RegisterForm = styled.div`
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RegisterInput = styled.input`
  width: 250px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #4949d5;
  color: #bbb8b8;
  font-size: 16px;

  :focus {
    outline: none;
  }
`;

export const RegisterButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  color: #bbb8b8;
  border: none;
  background-color: #4949d5;

  :hover {
    cursor: pointer;
    background-color: #4949d590;
  }

  :active {
    background-color: #4949d580;
  }
`;

export const DeleteWrap = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
`;

export const Exit = styled.span`
  color: white;
  :hover {
    cursor: pointer;
  }
`

