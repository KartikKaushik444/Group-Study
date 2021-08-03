// creating an array and passing the number, questions, options, and answers
let questions = [[
    {
    numb: 1,
    question: "What is the average case running time of an insertion sort algorithm?",
    answer: "d) O(N2)",
    options: [
      "a) O(N)",
      "b) O(N log N)",
      "c) O(log N)",
      "d) O(N2)",
    ]
  },
    {
     numb: 2,
     question: "What is the advantage of recursive approach than an iterative approach?",
     answer: "b) Less code and easy to implement",
     options: [
       "a) Consumes less memory",
       "b) Less code and easy to implement",
       "c) Consumes more memory",
       "d) More code has to be written"
     ]
   },
     {
     numb: 3,
     question: "What is the worst case complexity of binary search using recursion?",
     answer: "b) O(logn)",
     options: [
       "a) O(nlogn)",
       "b) O(logn)",
       "c) O(n)",
       "d) O(n2)"
     ]
   },
     {
     numb: 4,
     question: "The shortest distance between a line and a point is achieved when?",
     answer: "a) a line is drawn at 90 degrees to the given line from the given point",
     options: [
       "a) a line is drawn at 90 degrees to the given line from the given point",
       "b) a line is drawn at 180 degrees to the given line from the given point",
       "c) a line is drawn at 60 degrees to the given line from the given point",
       "d) a line is drawn at 270 degrees to the given line from the given point"
     ]
   },
     {
     numb: 5,
     question: "What is the shortest distance between the line given by -2x + 3y + 4 = 0 and the point (5,6)?",
     answer: "d) 3.3 units",
     options: [
       "a) 4.5 units",
       "b) 5.4 units",
       "c) 4.3 units",
       "d) 3.3 units"
     ]
   }
], 
// java
[
  {
  numb: 1,
  question: "Which of these standard collection classes implements a dynamic array?",
  answer: "c) ArrayList",
  options: [
    "a) AbstractList",
    "b) LinkedList",
    "c) ArrayList",
    "d) AbstractSet"
  ]
},
  {
  numb: 2,
  question: "Which of these jump statements can skip processing the remainder of the code in its body for a particular iteration?",
  answer: "d) continue",
  options: [
    "a) break",
    "b) return",
    "c) exit",
    "d) continue"
  ]
},
  {
  numb: 3,
  question: "Which of these keywords must be used to monitor for exceptions?",
  answer: "a) try",
  options: [
    "a) try",
    "b) finally",
    "c) throw",
    "d) catch"
  ]
},
  {
  numb: 4,
  question: "Which of the following is not OOPS concept in Java?",
  answer: "d) Compilation",
  options: [
    "a) Inheritance",
    "b) Encapsulation",
    "c) Polymorphism",
    "d) Compilation"
  ]
},
  {
  numb: 5,
  question: "Which concept of Java is achieved by combining methods and attribute into a class?",
  answer: "a) Encapsulation",
  options: [
    "a) Encapsulation",
    "b) Inheritance",
    "c) Polymorphism",
    "d) Abstraction"
  ]
},


{
  numb: 6,
  question: "Which of these is correct way of inheriting class A by class B?",
  answer: "c) class B extends A {}",
  options: [
    "a) class B + class A {}",
    "b) class B inherits class A {}",
    "c) class B extends A {}",
    "d) class B extends class A {}"
  ]
} 
],

// Css
[
  {
    numb: 1,
    question: "What is the Full form of CSS?",
    answer: "d) Cascading style sheets",
    options: [
      "a) Cascade style sheets",
      "b) Consecutive style sheets",
      "c) Color and style sheets",
      "d) Cascading style sheets"
    ]
  } ,

  {
    numb: 2,
    question: "In CSS, h1 can be called as _______",
    answer: "a) Selector",
    options: [
      "a) Selector",
      "b) Attribute",
      "c) Value",
      "d) Tag"

    ]
  } ,

  {
    numb: 3,
    question: "The _______property is used to set the color of the text.",
    answer: "c) color",
    options: [
      "a) pallet",
      "b) colour",
      "c) color",
      "d) text-decoration"

    ]
  } ,
  {
    numb: 4,
    question: "Identify the CSS property defining bottom-left corner shape of the border?",
    answer: "c) border-bottom-left-radius",
    options: [
      "a) border-radius",
      "b) border-corner-radius",
      "c) border-bottom-left-radius",
      "d) border-left-radius"

    ]
  } ,
  {
    numb: 5,
    question: "Which of the following is the correct way to applying style to a document?",
    answer: "d) All of the mentioned",
    options: [
      "a) Use an external style sheet, either by importing it or by linking to it",
      "b) Directly embed a document-wide style in the head element of the document",
      "c) Set an inline style rule using the style attribute directly on an element",
      "d) All of the mentioned"

    ]
  } 
],
// Html

[
  {
    numb: 1,
    question: "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
    answer: "b) id",
    options: [
      "a) class",
      "b) id",
      "c) article",
      "d) html"

    ]
  },

  {
    numb: 2,
    question: " HTML and XHTML stands for ______",
    answer: "a) Hyper Text Markup Language and Extensible HyperText Markup Language",
    options: [
      "a) Hyper Text Markup Language and Extensible HyperText Markup Language",
      "b) Hyper Text Markup Language and Extensible HyperText Marking Language",
      "c) Hyper Text Marking Language and EXtensible HyperText Marking Language",
      "d) Hyper Text Marking Language and Extensible HyperText Markup Language"

    ]
  },
  
  {
    numb: 3,
    question: "Which of the following is not the element associated with HTML table layout?",
    answer: "d) color",
    options: [
      "a) size",
      "b) spanning",
      "c) alignment",
      "d) color"

    ]
  }
]
];


let courses = [
  {
    first: "https://www.javatpoint.com/daa-algorithm",
    firstsite:"DAA - JavaTPoint",
    second: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
    secondsite:"DAA - GFG",
    third:  "https://www.tutorialspoint.com/design_and_analysis_of_algorithms/index.htm",
    thirdsite: "DAA - Tutorials Point",
  },

  {
    first: "https://www.javatpoint.com/java-tutorial",
    firstsite:"JAVA - JavaTPoint",
    second: "https://www.geeksforgeeks.org/java/",
    secondsite:"JAVA - GFG",
    third:  "https://www.tutorialspoint.com/java8/index.htm",
    thirdsite: "JAVA - Tutorials Point",
  },

  {
    first: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    firstsite:"CSS - MDN",
    second: "https://www.geeksforgeeks.org/css-tutorials/",
    secondsite:"CSS - GFG",
    third:  "https://www.tutorialspoint.com/css/index.htm",
    thirdsite: "CSS - Tutorials Point",
  },
  {
    first: "https://www.w3schools.com/html/DEFAULT.asp",
    firstsite:"HTML - W3Schools",
    second: "https://www.geeksforgeeks.org/html-tutorials/",
    secondsite:"HTML - GFG",
    third:  "https://www.tutorialspoint.com/html/index.htm",
    thirdsite: "HTML - Tutorials Point",
  }
];