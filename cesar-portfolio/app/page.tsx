import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, FileText, BarChart3, Database, Brain } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-semibold tracking-tight">Cesar Elder</h1>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/cesarr02" target="_blank">
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin size={16} /> LinkedIn
            </Button>
          </a>
          <Button className="flex items-center gap-2">
            <FileText size={16} /> Resume
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Standards Intern & Data Analyst
        </h2>
        <p className="text-lg text-gray-600">
          Bridging psychology and data analytics to drive data-informed decisions
          across industries.
        </p>
      </motion.div>

      {/* About Section */}
      <Card className="mb-12">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-gray-700 leading-relaxed">
            Graduated from Texas State University with a degree in Psychology,
            including a study abroad program in Greece and coursework in data
            analytics. Certified in Tableau Desktop Specialist and Data
            Analytics by The Global Career Accelerator, demonstrating
            foundational technical skills to complement a behavioral science
            background.
            <br />
            <br />
            Currently serving as a Standards Intern at the American Public
            Transportation Association (APTA), contributing to the development
            of national public transportation standards. Responsibilities
            include conducting research, performing gap analyses, and
            collaborating with program leadership and industry stakeholders to
            support data-informed decision-making in safety, technology, and
            operations within the transit sector.
          </p>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <BarChart3 className="mb-3" />
            <h4 className="font-semibold mb-2">Data Visualization</h4>
            <p className="text-sm text-gray-600">
              Tableau, dashboard design, storytelling with data
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Database className="mb-3" />
            <h4 className="font-semibold mb-2">Data Analysis</h4>
            <p className="text-sm text-gray-600">
              SQL, Excel, regression analysis, data cleaning
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Brain className="mb-3" />
            <h4 className="font-semibold mb-2">Behavioral Insight</h4>
            <p className="text-sm text-gray-600">
              Psychology-driven analysis and human-centered decision making
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Experience Section */}
      <Card className="mb-12">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div>
            <h4 className="font-semibold text-lg">
              Standards Intern — American Public Transportation Association
              (APTA)
            </h4>
            <p className="text-gray-600 text-sm mb-2">2025 – Present</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Conduct research to support national transit standards</li>
              <li>Perform gap analyses on safety and operational frameworks</li>
              <li>
                Collaborate with leadership and stakeholders to support
                data-driven decisions
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Projects Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">
                World Happiness Data Analysis
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Analyzed global happiness indicators using regression models to
                identify key drivers of well-being.
              </p>
              <Button variant="outline">View Project</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">
                Diabetes Risk Prediction Model
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Built a predictive model using logistic regression to identify
                key risk factors for diabetes.
              </p>
              <Button variant="outline">View Project</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Cesar Elder. All rights reserved.
      </div>
    </div>
  );
}
