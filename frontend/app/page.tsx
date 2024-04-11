
import Card from "@mui/material/Card"
import Container from "@mui/material/Container"
import Checkbox from '@mui/material/Checkbox';



const answers = [
  {
    id: 1,
    question: "Co to za relacja?",
    content: [
    {
      title: "Zwrotna",
      correct: true
    },
    {
      title: "Przeciwzwrotna",
      correct: true
    },
    {
      title: "Symetryczna",
      correct: true
    },
    {
      title: "Przeciwsymetryczna",
      correct: true
    },{
      title: "Asymetryczna",
      correct: true
    },{
      title: "Spójna",
      correct: true
    },
  ]
 
  },
  {
    id: 2,
    question: "Która z relacji poniżej jest przedstawiona?",
    content: [
    {
      title: "Zwrotna",
      correct: true
    },
    {
      title: "Przeciwzwrotna",
      correct: true
    },
    {
      title: "Symetryczna",
      correct: true
    },
    {
      title: "Przeciwsymetryczna",
      correct: true
    },{
      title: "Asymetryczna",
      correct: true
    },{
      title: "Spójna",
      correct: true
    },
  ]
 
  }
]


export default function Home() {
  return (
    <main >
      <form>
        {answers.map((item) => {
          return (
            <Card key={item.id}  sx={{ width: '50vw', textAlign:'center', margin: 2}}>
               <p> Pytanie {item.id} </p> 
               <p>{item.question}</p>

               {item.content.map((item) => {
                 return (
                   <div key={item.title}  style={{ display: 'flex', justifyContent:'center' }}>
                     <p >{item.title}</p>
                     <Checkbox />
                   </div>
                 )
               })
               }
            </Card>
          )
          
        })

        }
         
      </form>
    </main>
  );
}
