const medium_questions_arr = [
   {
      q:'What is the output of the following code ?',
      img:'../public/imgs/medium/reduce_pattern.png',
      options:['8', '6', '4', '3'],
      true_ans:'3'
   },
   {
      q:'What is the output of the following code ?',
      img:'../public/imgs/medium/argument_obj.png',
      options:['<b>argument</b> is not defined', '234', 'syntax error', '[2, 3, 4]'],
      true_ans:'[2, 3, 4]'
   },
   {
      q:'What is the output of the following code ?',
      img:'../public/imgs/medium/function_currying.png',
      options:['10', '6', 'syntax error', 'runtime error'],
      true_ans:'6'
   },
   {
      q:'What will the following code print ?',
      img:'../public/imgs/medium/arr_some.png',
      options:['true', 'false'],
      true_ans:'false'
   },
   {
      q:'Is a function in Javascript an Object?',
      options:['True', 'False'],
      true_ans:'True'
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
      q:'Can Array.map() method alter the size of an array?',
      options:['True', 'False'],
      true_ans:'False'
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
      true_ans:'root Element'
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