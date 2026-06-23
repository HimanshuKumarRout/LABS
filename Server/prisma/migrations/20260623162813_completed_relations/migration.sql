/*
  Warnings:

  - You are about to drop the column `completed` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "completed";

-- CreateTable
CREATE TABLE "ProfileCompletedProblem" (
    "profileId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,

    CONSTRAINT "ProfileCompletedProblem_pkey" PRIMARY KEY ("profileId","problemId")
);

-- CreateTable
CREATE TABLE "ProfileCompletedCourse" (
    "profileId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "ProfileCompletedCourse_pkey" PRIMARY KEY ("profileId","courseId")
);

-- AddForeignKey
ALTER TABLE "ProfileCompletedProblem" ADD CONSTRAINT "ProfileCompletedProblem_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileCompletedProblem" ADD CONSTRAINT "ProfileCompletedProblem_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileCompletedCourse" ADD CONSTRAINT "ProfileCompletedCourse_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileCompletedCourse" ADD CONSTRAINT "ProfileCompletedCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
