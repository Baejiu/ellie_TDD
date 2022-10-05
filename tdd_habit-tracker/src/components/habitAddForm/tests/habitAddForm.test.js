import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HabitAddForm from "../habitAddForm";
import renderer from 'react-test-renderer';

describe('HabitAddForm', ()=> {
  it('renders', () => {
    // 스냅샷 테스트를 실행
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  })

  describe('Form Submit', () => {
    let onAdd;
    let input;
    let button;
  
    beforeEach(() => {
      // mock함수 생성
      onAdd = jest.fn();
  
      // 컴포넌트를 render함
      render(<HabitAddForm onAdd={onAdd} />);
  
      //screen Placeholder로 구분해 가져옴
      input = screen.getByPlaceholderText('Habit');
  
      //screen Text로 구분해 가져옴
      button = screen.getByText('Add');
    })
  
    it('calls onAdd when button is clicked and valid habit is entered', () => {
      // input에다가 원하는 습관의 이름을 타이핑 한 다음에
      userEvent.type(input, 'New Habit');
  
      //add라는 버튼을 클릭하면
      userEvent.click(button);
  
      //onAdd가 input에 입력된 이름과 함께 호출되어야 함
      expect(onAdd).toHaveBeenCalledWith('New Habit');
  
    });
  
    it('does not call onAdd when the habit is empty', () => {
      userEvent.type(input, '');
      userEvent.click(button);
    
      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  })
  
})