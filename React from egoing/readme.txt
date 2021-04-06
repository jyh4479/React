1. 사용자 정의 태그를 Component라고 한다.

2. Component작성법

3. Props작성법

4. 배포시 경량화를 위한 'npm or npx serve -s build' 명령을 통한 코드 리팩토링

5. 각 Component를 따로 따로 분리하기

6. Constructor를 사용해서 render시작 전 data를 정의할 수 있다.

7. Data를 props로 받고 state를 변경하는 방법 --> list를 출력할때 react자체에서 각 원소의 key값을 요구함(안넣었을 경우 브라우저 관리자도구 콘솔에서 오류 확인가능)

8. a태그의 reload하는 특징을 막기위해 function에 e인자를 받고 e.preventDefault를 통해서 태그 속성의 기본 동작을 막을 수 있다.

9. 이벤트가 발생할때 함수를 선언하여 Component의 mode를 바꾸면서 출력되는 내용을 변경할 수 있다 --> 그 과정에서 bind함수에 대한 학습 필요

10. React에서 state값을 변경하려면 setState라는 함수를 사용하여 값을 변경해야함