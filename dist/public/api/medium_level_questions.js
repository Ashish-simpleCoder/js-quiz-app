const medium_questions_arr = [
   {
      q:'What is the output of the following code ?',
      img:'../public/imgs/medium/await_fetch.png',
      options:["Unexpected reserved word", 'request will be successfull' , 'None of these'],
      true_ans:'request will be successfull'
   },
   {
      q:'What will the output of following code?',
      img:'../public/imgs/medium/obj_ref.png',
      options:[
         "{<b class='red'>Hero</b>: 'Blast'\n, <b class='red'>Power Level</b>: 'Beyond God level'}",
         "{<b class='red'>Hero</b>: 'Saitama'\n, <b class='red'>Power Level</b>: 'Infinite'}",
         "{<b class='red'>Hero</b>: 'Saitama'\n, <b class='red'>Power Level</b>: 'Beyond God level'}",
         "{<b class='red'>Hero</b>: 'Saitama'\n, <b class='red'>Power Level</b>: 'Infinite and Infinite'}",

      ],
         true_ans:"{<b class='red'>Hero</b>: 'Saitama'\n, <b class='red'>Power Level</b>: 'Beyond God level'}",
   },
   {
      q:'What is the output of the following code ?',
      img:'../public/imgs/medium/argument_obj.png',
      options:['<b>argument</b> is not defined', '234', 'syntax error', '[2, 3, 4]'],
      true_ans:'[2, 3, 4]'
   },
   {
      q:'Is a function in Javascript can behave as an Object?',
      options:['True', 'False'],
      true_ans:'True'
   },
   {
      q:'What will the following code print ?',
      img:'../public/imgs/medium/arr_some.png',
      options:['true', 'false'],
      true_ans:'false'
   },
   {
      q:'Which of the following feature is not present in Javascript?',
      options:['Dynamic Typing', 'Inheritance', 'Static Typing'],
      true_ans:'Static Typing'
   },
   {
      q:'Which of the following Library/Framerwork is made of Javascript?',
      options:['ReactJS' ,'FlutterJS', 'ThreeJS', 'VueJS'],
      true_ans:'FlutterJS'
   },
   {
      q:'What is the output of the following code ?',
      img:'../public/imgs/medium/function_currying.png',
      options:['10', '6', 'syntax error', 'runtime error'],
      true_ans:'6'
   },
   {
      q:'Can Array.map() method alter the size of an array?',
      options:['True', 'False'],
      true_ans:'False'
   },
   {
      q:'What is the output of the following code ?',
      img:'../public/imgs/medium/reduce_pattern.png',
      options:['8', '6', '4', '3'],
      true_ans:'3'
   },
   {
      q:'Can Array.filter() method returns a new array?',
      options:['True', 'False'],
      true_ans:'True'
   },
   {
      q:'Full form of <b>BOM</b>',
      options:['Big Object Model', 'Big Omega Model','Browser Object Model', 'Blast Object Model'],
      true_ans:'Browser Object Model'
   },
   {
      q:'How does an <b>Event</b> propagate in JS?',
      options:['Through Event Bubbling', 'Through Event Capturing'],
      true_ans:'Through Event Bubbling'
   },
   {
      q:'Is <b>MultiThreading</b> is available in JS?',
      options:['True', 'False'],
      true_ans:'False'
   },
   {
      q:'How to declare an <b>Arrow function</b>?',
      options:[
         'const func = () => {}',
         'const func = {}',
         'const func => {}',
         `const func(){\n}`
      ],
      true_ans:'const func = () => {}'
   },
   {
      q:'What will the output of following code?',
      img:'../public/imgs/medium/nan.png',
      options:['False','True','Error','None of these'],
      true_ans:'False'
   },
   {
      q:'What will the <b>document.documentElement</b> will return?',
      options:['body Element', 'root Element', 'head Element'],
      true_ans:'root Element'
   },
   {
      q:'What is <b>Hoisting</b> ?',
      options:[
         'It is a mechanism where variables and functions declarations all moved to the bottom of their scope',
         'It is a mechanism where variables and functions declarations all moved to the top of their scope'
      ],
      true_ans:'It is a mechanism where variables and functions declarations all moved to the top of their scope'
   },
]

export default medium_questions_arr