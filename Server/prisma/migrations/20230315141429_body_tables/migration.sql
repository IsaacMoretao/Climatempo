-- CreateTable
CREATE TABLE "previsoes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "tempMin" INTEGER NOT NULL,
    "tempMax" INTEGER NOT NULL,
    "rainProbabilit" INTEGER NOT NULL,
    "rainPrecipitation" INTEGER NOT NULL,
    "periodBegin" TEXT NOT NULL,
    "periodEnd" TEXT NOT NULL,
    "local_id" TEXT NOT NULL,
    CONSTRAINT "previsoes_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locality" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "locality" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "Longitude" TEXT NOT NULL
);
