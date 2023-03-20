import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.locality.create({
    data: {
      name: "Osasco",
      state: "SP",
      latitude: "-23.538841",
      Longitude: "-46.793328",
      previsoes: {
        create: {
          date: "27082004",
          text: "Sol intenço com temperatura mediana e vantos ha 50Km",
          tempMin: 17,
          tempMax: 25,
          rainProbabilit: 10,
          rainPrecipitation: 5,
          periodBegin: "Clima previsto para começar dia 27",
          periodEnd: "esse clima permanecerá por uma semana"  
          
        }
      }
    }
  });

  await prisma.locality.create({
    data: {
      name: "SãoPaulo",
      state: "SP",
      latitude: "-23.538841",
      Longitude: "-46.793328",
      previsoes: {
        create: {
          date: "27082004",
          text: "Sol intenço com temperatura mediana e vantos ha 50Km",
          tempMin: 17,
          tempMax: 25,
          rainProbabilit: 10,
          rainPrecipitation: 5,
          periodBegin: "Clima previsto para começar dia 27",
          periodEnd: "esse clima permanecerá por uma semana"  
          
        }
      }
    }
  })
}

main()