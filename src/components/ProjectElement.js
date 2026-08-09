
import "../App.css"

const ProjectElement = ({
  title,
  languages,
  repo,
  liveDemo,
  description,
  workInProgress,
  imageLink,
}) => {

  return (
    <div className='project-element'>
      <h2 style={{ color: '#e4b271', textAlign: 'center', fontWeight: '900' }}>
        {title}
      </h2>
      <div style={{ fontWeight: '900' }}>
        <span style={{ color: '#e4b271' }}>Made in: </span>
        {languages}
      </div>

      {workInProgress && (
        <div
          style={{
            border: '1px solid #e4b271',
            padding: '10px',
            marginRight: '25px',
            marginLeft: '25px',
            marginTop: '15px',
            marginBottom: '15px',
            borderRadius: '5px',
          }}
        >
          {workInProgress}
        </div>
      )}

      {description && (
        <p>
          <span style={{ color: '#e4b271', fontWeight: '900' }}>
            Description:{' '}
          </span>
          {description}
        </p>
      )}

      <a href={repo} target='_blank' rel='noopener noreferrer'>
        <span
          style={{
            border: '1px solid #e4b271',
            color: '#e4b271',
            fontWeight: '500',

            padding: '3px',
            margin: '5px',
            borderRadius: '4px',
            display: 'inline-block',
          }}
          className="button"
        >
          GitHub repo
        </span>
      </a>

      {liveDemo && (
        <a href={liveDemo} target='_blank' rel='noopener noreferrer'>
          <span
            style={{
              border: '1px solid #e4b271',
              color: '#e4b271',
              fontWeight: '500',

              padding: '3px',
              margin: '5px',
              borderRadius: '4px',
              marginBottom: '10px',
              display: 'inline-block',
            }}
            className="button"
          >
            Live demo
          </span>
        </a>
      )}

      {imageLink && (
        <img
          src={require("./personal-website-texts/images/" + imageLink)}
          alt={title + ' image'}
          style={{
            display: 'block',
            width: '250px',
            margin: 'auto',
            padding: '5px',
          }}
        />
      )}
    </div>
  );
};

export default ProjectElement;












Signals, Information and Communication - TSKS10
4.0 hp
Registered
Automatic Control - TSRT12
6.0 hp
Completed
Distributed Systems - TDDD25
6.0 hp
Registered
Ethical hacking - TDDE61
6.0 hp
Completed
Methods and Tools for Large Distributed Projects - TDDE51
6.0 hp
Completed
Scientific Method - TDDD89
6.0 hp
Completed
Database Technology - TDDD37
6.0 hp
Registered
Scientific Computing - TANA21
6.0 hp
Completed
Software Testing - TDDD04
6.0 hp
Completed
Advanced Project Course: Secure Distributed and Embedded Systems - TDDE21
6.0 hp
Completed
Advanced Web Programming - TDDD27
6.0 hp
Completed
Advanced Programming in C++ - TDDD38
6.0 hp
Registered
Web Programming - TDDD97
6.0 hp
Completed
Information Security, Second Course - TDDD17
6.0 hp
Completed
Algorithmic Problem Solving - TDDD95
6.0 hp
Registered
Professionalism for Engineers, Part 2 - TDDD79
1.0 hp
Completed
Software Security - TDDC90
6.0 hp
Completed
Computer Security - TSIT02
6.0 hp
Completed
Cryptology - TSIT03
6.0 hp
Registered
Computer Networks - TDTS06
6.0 hp
Completed
Software Design and Construction - TDDE45
6.0 hp
Completed
Attendance at Thesis Presentation - TEXCIV
0.0 hp
Registered
Interactive Systems - TDDD60
4.0 hp
Completed
Software Engineering - Bachelor Project - TDDD96
15.0 hp
Completed
Professionalism for Engineers, Part 6 - TDDD98
1.0 hp
Completed
Logic - TDDD88
5.0 hp
Completed
Combinatorial Optimization, Introductory Course - TAOP33
4.0 hp
Completed
Software Engineering Theory - TDDC93
4.0 hp
Registered
Professionalism for Engineers, Part 5 - TDDD91
1.0 hp
Completed
Signals and Systems, and Transform Theory - TSDT84
8.0 hp
Completed
Microcomputer, Project Laboratory - TSEA29
8.0 hp
Completed
Computer Hardware and Architecture - TSEA82
4.0 hp
Completed
Physics - TFYA86
5.0 hp
Completed
Switching Theory and Logical Design - TSEA22
6.0 hp
Completed
Concurrent Programming and Operating Systems - TDDB68
6.0 hp
Completed
Professionalism for Engineers, Part 4 - TDDD94
1.0 hp
Completed
Computer Hardware and Architecture, Design Project - TSEA83
8.0 hp
Completed
Functional and Imperative Programming, Part 2 - TDDE24
5.0 hp
Completed
Perspectives to Computer and Software Technology - TDDE25
6.0 hp
Completed
Professionalism for Engineers, Part 1 - TDDD70
1.0 hp
Completed
Professionalism for Engineers, Part 3 - TDDD84
1.0 hp
Completed
Data Structures, Algorithms and Programming Paradigms - TDDD86
11.0 hp
Completed
Electronics - TSTE24
5.0 hp
Completed
Functional and Imperative Programming, Part 1 - TDDE23
6.0 hp
Completed
Discrete Mathematics - TATA65
6.0 hp
Completed
Statistics - TNG006
6.0 hp
Completed
Mechanics and Wave Physics - TNE043
6.0 hp
Completed
Calculus III - TNA006
6.0 hp
Completed
Calculus I - TNA003
6.0 hp
Completed
Calculus II - TNA004
6.0 hp
Completed
Object-Oriented Programming - TND002
6.0 hp
Completed
Foundation Course in Mathematics - TNA001
6.0 hp
Completed
Linear Algebra - TNA002
6.0 hp
Completed




Signals, Information and Communication - TSKS10
4.0 hp
Registered
Automatic Control - TSRT12
6.0 hp
Completed
Distributed Systems - TDDD25
6.0 hp
Registered
Ethical hacking - TDDE61
6.0 hp
Completed
Methods and Tools for Large Distributed Projects - TDDE51
6.0 hp
Completed
Scientific Method - TDDD89
6.0 hp
Completed
Database Technology - TDDD37
6.0 hp
Registered
Scientific Computing - TANA21
6.0 hp
Completed
Software Testing - TDDD04
6.0 hp
Completed
Advanced Project Course: Secure Distributed and Embedded Systems - TDDE21
6.0 hp
Completed
Advanced Web Programming - TDDD27
6.0 hp
Completed
Advanced Programming in C++ - TDDD38
6.0 hp
Registered
Web Programming - TDDD97
6.0 hp
Completed
Information Security, Second Course - TDDD17
6.0 hp
Completed
Algorithmic Problem Solving - TDDD95
6.0 hp
Registered
Professionalism for Engineers, Part 2 - TDDD79
1.0 hp
Completed
Software Security - TDDC90
6.0 hp
Completed
Computer Security - TSIT02
6.0 hp
Completed
Cryptology - TSIT03
6.0 hp
Registered
Computer Networks - TDTS06
6.0 hp
Completed
Software Design and Construction - TDDE45
6.0 hp
Completed
Attendance at Thesis Presentation - TEXCIV
0.0 hp
Registered
Interactive Systems - TDDD60
4.0 hp
Completed
Software Engineering - Bachelor Project - TDDD96
15.0 hp
Completed
Professionalism for Engineers, Part 6 - TDDD98
1.0 hp
Completed
Logic - TDDD88
5.0 hp
Completed
Combinatorial Optimization, Introductory Course - TAOP33
4.0 hp
Completed
Software Engineering Theory - TDDC93
4.0 hp
Registered
Professionalism for Engineers, Part 5 - TDDD91
1.0 hp
Completed
Signals and Systems, and Transform Theory - TSDT84
8.0 hp
Completed
Microcomputer, Project Laboratory - TSEA29
8.0 hp
Completed
Computer Hardware and Architecture - TSEA82
4.0 hp
Completed
Physics - TFYA86
5.0 hp
Completed
Switching Theory and Logical Design - TSEA22
6.0 hp
Completed
Concurrent Programming and Operating Systems - TDDB68
6.0 hp
Completed
Professionalism for Engineers, Part 4 - TDDD94
1.0 hp
Completed
Computer Hardware and Architecture, Design Project - TSEA83
8.0 hp
Completed
Functional and Imperative Programming, Part 2 - TDDE24
5.0 hp
Completed
Perspectives to Computer and Software Technology - TDDE25
6.0 hp
Completed
Professionalism for Engineers, Part 1 - TDDD70
1.0 hp
Completed
Professionalism for Engineers, Part 3 - TDDD84
1.0 hp
Completed
Data Structures, Algorithms and Programming Paradigms - TDDD86
11.0 hp
Completed
Electronics - TSTE24
5.0 hp
Completed
Functional and Imperative Programming, Part 1 - TDDE23
6.0 hp
Completed
Discrete Mathematics - TATA65
6.0 hp
Completed
Statistics - TNG006
6.0 hp
Completed
Mechanics and Wave Physics - TNE043
6.0 hp
Completed
Calculus III - TNA006
6.0 hp
Completed
Calculus I - TNA003
6.0 hp
Completed
Calculus II - TNA004
6.0 hp
Completed
Object-Oriented Programming - TND002
6.0 hp
Completed
Foundation Course in Mathematics - TNA001
6.0 hp
Completed
Linear Algebra - TNA002
6.0 hp
Completed



Signals, Information and Communication - TSKS10
4.0 hp
Registered
Automatic Control - TSRT12
6.0 hp
Completed
Distributed Systems - TDDD25
6.0 hp
Registered
Ethical hacking - TDDE61
6.0 hp
Completed
Methods and Tools for Large Distributed Projects - TDDE51
6.0 hp
Completed
Scientific Method - TDDD89
6.0 hp
Completed
Database Technology - TDDD37
6.0 hp
Registered
Scientific Computing - TANA21
6.0 hp
Completed
Software Testing - TDDD04
6.0 hp
Completed
Advanced Project Course: Secure Distributed and Embedded Systems - TDDE21
6.0 hp
Completed
Advanced Web Programming - TDDD27
6.0 hp
Completed
Advanced Programming in C++ - TDDD38
6.0 hp
Registered
Web Programming - TDDD97
6.0 hp
Completed
Information Security, Second Course - TDDD17
6.0 hp
Completed
Algorithmic Problem Solving - TDDD95
6.0 hp
Registered
Professionalism for Engineers, Part 2 - TDDD79
1.0 hp
Completed
Software Security - TDDC90
6.0 hp
Completed
Computer Security - TSIT02
6.0 hp
Completed
Cryptology - TSIT03
6.0 hp
Registered
Computer Networks - TDTS06
6.0 hp
Completed
Software Design and Construction - TDDE45
6.0 hp
Completed
Attendance at Thesis Presentation - TEXCIV
0.0 hp
Registered
Interactive Systems - TDDD60
4.0 hp
Completed
Software Engineering - Bachelor Project - TDDD96
15.0 hp
Completed
Professionalism for Engineers, Part 6 - TDDD98
1.0 hp
Completed
Logic - TDDD88
5.0 hp
Completed
Combinatorial Optimization, Introductory Course - TAOP33
4.0 hp
Completed
Software Engineering Theory - TDDC93
4.0 hp
Registered
Professionalism for Engineers, Part 5 - TDDD91
1.0 hp
Completed
Signals and Systems, and Transform Theory - TSDT84
8.0 hp
Completed
Microcomputer, Project Laboratory - TSEA29
8.0 hp
Completed
Computer Hardware and Architecture - TSEA82
4.0 hp
Completed
Physics - TFYA86
5.0 hp
Completed
Switching Theory and Logical Design - TSEA22
6.0 hp
Completed
Concurrent Programming and Operating Systems - TDDB68
6.0 hp
Completed
Professionalism for Engineers, Part 4 - TDDD94
1.0 hp
Completed
Computer Hardware and Architecture, Design Project - TSEA83
8.0 hp
Completed
Functional and Imperative Programming, Part 2 - TDDE24
5.0 hp
Completed
Perspectives to Computer and Software Technology - TDDE25
6.0 hp
Completed
Professionalism for Engineers, Part 1 - TDDD70
1.0 hp
Completed
Professionalism for Engineers, Part 3 - TDDD84
1.0 hp
Completed
Data Structures, Algorithms and Programming Paradigms - TDDD86
11.0 hp
Completed
Electronics - TSTE24
5.0 hp
Completed
Functional and Imperative Programming, Part 1 - TDDE23
6.0 hp
Completed
Discrete Mathematics - TATA65
6.0 hp
Completed
Statistics - TNG006
6.0 hp
Completed
Mechanics and Wave Physics - TNE043
6.0 hp
Completed
Calculus III - TNA006
6.0 hp
Completed
Calculus I - TNA003
6.0 hp
Completed
Calculus II - TNA004
6.0 hp
Completed
Object-Oriented Programming - TND002
6.0 hp
Completed
Foundation Course in Mathematics - TNA001
6.0 hp
Completed
Linear Algebra - TNA002
6.0 hp
Completed



Signals, Information and Communication - TSKS10
4.0 hp
Registered
Automatic Control - TSRT12
6.0 hp
Completed
Distributed Systems - TDDD25
6.0 hp
Registered
Ethical hacking - TDDE61
6.0 hp
Completed
Methods and Tools for Large Distributed Projects - TDDE51
6.0 hp
Completed
Scientific Method - TDDD89
6.0 hp
Completed
Database Technology - TDDD37
6.0 hp
Registered
Scientific Computing - TANA21
6.0 hp
Completed
Software Testing - TDDD04
6.0 hp
Completed
Advanced Project Course: Secure Distributed and Embedded Systems - TDDE21
6.0 hp
Completed
Advanced Web Programming - TDDD27
6.0 hp
Completed
Advanced Programming in C++ - TDDD38
6.0 hp
Registered
Web Programming - TDDD97
6.0 hp
Completed
Information Security, Second Course - TDDD17
6.0 hp
Completed
Algorithmic Problem Solving - TDDD95
6.0 hp
Registered
Professionalism for Engineers, Part 2 - TDDD79
1.0 hp
Completed
Software Security - TDDC90
6.0 hp
Completed
Computer Security - TSIT02
6.0 hp
Completed
Cryptology - TSIT03
6.0 hp
Registered
Computer Networks - TDTS06
6.0 hp
Completed
Software Design and Construction - TDDE45
6.0 hp
Completed
Attendance at Thesis Presentation - TEXCIV
0.0 hp
Registered
Interactive Systems - TDDD60
4.0 hp
Completed
Software Engineering - Bachelor Project - TDDD96
15.0 hp
Completed
Professionalism for Engineers, Part 6 - TDDD98
1.0 hp
Completed
Logic - TDDD88
5.0 hp
Completed
Combinatorial Optimization, Introductory Course - TAOP33
4.0 hp
Completed
Software Engineering Theory - TDDC93
4.0 hp
Registered
Professionalism for Engineers, Part 5 - TDDD91
1.0 hp
Completed
Signals and Systems, and Transform Theory - TSDT84
8.0 hp
Completed
Microcomputer, Project Laboratory - TSEA29
8.0 hp
Completed
Computer Hardware and Architecture - TSEA82
4.0 hp
Completed
Physics - TFYA86
5.0 hp
Completed
Switching Theory and Logical Design - TSEA22
6.0 hp
Completed
Concurrent Programming and Operating Systems - TDDB68
6.0 hp
Completed
Professionalism for Engineers, Part 4 - TDDD94
1.0 hp
Completed
Computer Hardware and Architecture, Design Project - TSEA83
8.0 hp
Completed
Functional and Imperative Programming, Part 2 - TDDE24
5.0 hp
Completed
Perspectives to Computer and Software Technology - TDDE25
6.0 hp
Completed
Professionalism for Engineers, Part 1 - TDDD70
1.0 hp
Completed
Professionalism for Engineers, Part 3 - TDDD84
1.0 hp
Completed
Data Structures, Algorithms and Programming Paradigms - TDDD86
11.0 hp
Completed
Electronics - TSTE24
5.0 hp
Completed
Functional and Imperative Programming, Part 1 - TDDE23
6.0 hp
Completed
Discrete Mathematics - TATA65
6.0 hp
Completed
Statistics - TNG006
6.0 hp
Completed
Mechanics and Wave Physics - TNE043
6.0 hp
Completed
Calculus III - TNA006
6.0 hp
Completed
Calculus I - TNA003
6.0 hp
Completed
Calculus II - TNA004
6.0 hp
Completed
Object-Oriented Programming - TND002
6.0 hp
Completed
Foundation Course in Mathematics - TNA001
6.0 hp
Completed
Linear Algebra - TNA002
6.0 hp
Completed


Signals, Information and Communication - TSKS10
4.0 hp
Registered
Automatic Control - TSRT12
6.0 hp
Completed
Distributed Systems - TDDD25
6.0 hp
Registered
Ethical hacking - TDDE61
6.0 hp
Completed
Methods and Tools for Large Distributed Projects - TDDE51
6.0 hp
Completed
Scientific Method - TDDD89
6.0 hp
Completed
Database Technology - TDDD37
6.0 hp
Registered
Scientific Computing - TANA21
6.0 hp
Completed
Software Testing - TDDD04
6.0 hp
Completed
Advanced Project Course: Secure Distributed and Embedded Systems - TDDE21
6.0 hp
Completed
Advanced Web Programming - TDDD27
6.0 hp
Completed
Advanced Programming in C++ - TDDD38
6.0 hp
Registered
Web Programming - TDDD97
6.0 hp
Completed
Information Security, Second Course - TDDD17
6.0 hp
Completed
Algorithmic Problem Solving - TDDD95
6.0 hp
Registered
Professionalism for Engineers, Part 2 - TDDD79
1.0 hp
Completed
Software Security - TDDC90
6.0 hp
Completed
Computer Security - TSIT02
6.0 hp
Completed
Cryptology - TSIT03
6.0 hp
Registered
Computer Networks - TDTS06
6.0 hp
Completed
Software Design and Construction - TDDE45
6.0 hp
Completed
Attendance at Thesis Presentation - TEXCIV
0.0 hp
Registered
Interactive Systems - TDDD60
4.0 hp
Completed
Software Engineering - Bachelor Project - TDDD96
15.0 hp
Completed
Professionalism for Engineers, Part 6 - TDDD98
1.0 hp
Completed
Logic - TDDD88
5.0 hp
Completed
Combinatorial Optimization, Introductory Course - TAOP33
4.0 hp
Completed
Software Engineering Theory - TDDC93
4.0 hp
Registered
Professionalism for Engineers, Part 5 - TDDD91
1.0 hp
Completed
Signals and Systems, and Transform Theory - TSDT84
8.0 hp
Completed
Microcomputer, Project Laboratory - TSEA29
8.0 hp
Completed
Computer Hardware and Architecture - TSEA82
4.0 hp
Completed
Physics - TFYA86
5.0 hp
Completed
Switching Theory and Logical Design - TSEA22
6.0 hp
Completed
Concurrent Programming and Operating Systems - TDDB68
6.0 hp
Completed
Professionalism for Engineers, Part 4 - TDDD94
1.0 hp
Completed
Computer Hardware and Architecture, Design Project - TSEA83
8.0 hp
Completed
Functional and Imperative Programming, Part 2 - TDDE24
5.0 hp
Completed
Perspectives to Computer and Software Technology - TDDE25
6.0 hp
Completed
Professionalism for Engineers, Part 1 - TDDD70
1.0 hp
Completed
Professionalism for Engineers, Part 3 - TDDD84
1.0 hp
Completed
Data Structures, Algorithms and Programming Paradigms - TDDD86
11.0 hp
Completed
Electronics - TSTE24
5.0 hp
Completed
Functional and Imperative Programming, Part 1 - TDDE23
6.0 hp
Completed
Discrete Mathematics - TATA65
6.0 hp
Completed
Statistics - TNG006
6.0 hp
Completed
Mechanics and Wave Physics - TNE043
6.0 hp
Completed
Calculus III - TNA006
6.0 hp
Completed
Calculus I - TNA003
6.0 hp
Completed
Calculus II - TNA004
6.0 hp
Completed
Object-Oriented Programming - TND002
6.0 hp
Completed
Foundation Course in Mathematics - TNA001
6.0 hp
Completed
Linear Algebra - TNA002
6.0 hp
Completed


9931


993199319931

























Matematisk grundkurs 6,0 hp
Linjär algebra 6,0 hp
Analys I 6,0 hp
Objektorienterad programmering 6,0 hp
Analys II 6,0 hp
Mekanik och vågfysik 6,0 hp
Analys III 6,0 hp
Matematisk statistik 6,0 hp
Diskret matematik 6,0 hp
Elektronik 5,0 hp
Ingenjörsprofessionalism, del 1,0 hp
Perspektiv på data- och mjukvaruteknik 6,0 hp
Funktionell och imperativ programmering, del 5,0 hp
Datastrukturer, algoritmer och programmeringsparadigm 11,0 hp
Ingenjörsprofessionalism, del 1,0 hp
Funktionell och imperativ programmering, del 6,0 hp
Digitalteknik 6,0 hp
Processprogrammering och operativsystem 6,0 hp
Datorkonstruktion 8,0 hp
Ingenjörsprofessionalism, del 1,0 hp
Datorteknik 4,0 hp
Kombinatorisk optimering gk 4,0 hp
Konstruktion med mikrodatorer, projektkurs 8,0 hp
Ingenjörsprofessionalism, del 1,0 hp
Logik 5,0 hp
Interaktiva system 4,0 hp
Fysik 5,0 hp
Kandidatprojekt i programvaruutveckling 15,0 hp
Ingenjörsprofessionalism, del 1,0 hp
Avancerad programvarudesign 6,0 hp
Datornät 6,0 hp
Datasäkerhet 6,0 hp
Webbprogrammering 6,0 hp
Avancerad webbprogrammering 6,0 hp
Ingenjörsprofessionalism, del 1,0 hp
Software Security 6,0 hp
Beräkningsmatematik 6,0 hp
Avancerad projektkurs: Säkra distribuerade och inbyggda system 6,0 hp
Signaler och system samt transformer 8,0 hp
Programvarutestning 6,0 hp
Vetenskaplig metod 6,0 hp
Reglerteknik 6,0 hp
Metoder och verktyg för stora distribuerade projekt 6,0 hp
Informationssäkerhet, fk 6,0 hp
Etisk hackning 6,0 hp
