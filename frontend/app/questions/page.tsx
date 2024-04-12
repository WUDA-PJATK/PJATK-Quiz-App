import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

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
function CheckboxWithText({text}: {text: String}) {
  return (
    <div className="items-top flex space-x-2 m-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
        {text}
        </label>
      </div>
    </div>
  )
}
export default function Questions() {
  return (
    <main className="flex flex-col gap-10 p-10 items-center">
      {answers.map((item) => {
        return (
          <Card key={item.id} className="w-[50%] p-2 text-center bg-secondary">
            <h2 className="font-bold">Pytanie {item.id}</h2>
            <p className="text-muted-foreground">{item.question}</p>

            <div className="flex flex-col justify-self-center"> 
              {item.content.map((item) => {
                return (
                  <CheckboxWithText key={item.title} text={item.title}  />
                )
              })}
            </div>
          </Card>
        )
      })}
    </main>
  )
}