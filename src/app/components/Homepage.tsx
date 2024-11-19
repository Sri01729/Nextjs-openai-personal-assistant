import React from 'react'
import Botanimation from './Botanimation'
import { Card, CardContent } from '@/components/ui/card'
import ContentCard from './ContentCard'

const Homepage = () => {
  return (

      <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center py-16 px-6">
              <h1 className="text-4xl font-bold md:text-5xl">Welcome to MediBot</h1>
              <p className="mt-4 text-lg md:text-xl">
                  Your personal AI-powered health assistant, here to answer all your medical questions.
              </p>
              <section className="mt-8 px-8 py-3  text-white rounded-lg">
                <Botanimation />
              </section>
          </section>

          {/* Features Section */}
          <section className="py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                  <h2 className="text-3xl font-bold text-center md:text-4xl mb-12 ">What MediBot Can Do</h2>
                    <div className='flex flex-row flex-shrink gap-5 p-5'>
                      <ContentCard title={'Symptom Analysis'} description={'Describe your symptoms, and MediBot will provide potential causes and advice.'} />
                      <ContentCard title={'Nutritional Guidance'} description={'Get personalized advice on vitamins, nutrients, and diets for better health.'} />
                      <ContentCard title={'Health Tips'} description={'Access a library of tips on mental health, fitness, and preventive care.'} />
                    </div>
                  </div>

          </section>



            <footer className="py-8">
                <div className="container max-w-6xl mx-auto text-center">
                  <p className="text-sm">
                      © {new Date().getFullYear()} Created by Sai Srinivas Alahari. All rights reserved. | Powered by Nextjs, OpenAI and Spline.
                  </p>
                </div>
            </footer>
        </div>

  )
}

export default Homepage
