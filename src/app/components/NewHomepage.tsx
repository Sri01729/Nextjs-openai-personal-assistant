import { SquareActivity , HeartPulse, Utensils } from "lucide-react";
import { cn } from '@/lib/utils'
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Botanimation from "./Botanimation";

const NewHomepage = () => {
  return (
    <>
    <section className={cn("min-h-screen flex flex-col bg-background text-foreground")}>
      <div className="container overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">AI Assistant</Badge>
          <div>
            <h1 className="text-4xl font-semibold lg:text-6xl">
              MediBot
            </h1>
          </div>
        </div>
        <div className="relative mx-auto max-w-screen-lg">
            <Botanimation />
             <div className=" relative left-3/4 bottom-14 bg-background h-10 w-1/4" />
        </div>
        <div className="mx-auto mt-20 flex max-w-screen-lg flex-col md:flex-row">
          <div className="flex grow basis-0 flex-col rounded-md bg-background p-4">
            <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
              <SquareActivity  className="h-auto w-5" />
            </div>
            <h3 className="mb-2 font-semibold">Symptom Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Describe your symptoms, and MediBot will provide potential causes and advice.
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
          />
          <div className="flex grow basis-0 flex-col rounded-md bg-background p-4">
            <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
              <Utensils className="h-auto w-5" />
            </div>
            <h3 className="mb-2 font-semibold">Nutritional Guidance</h3>
            <p className="text-sm text-muted-foreground">
             Get personalized advice on vitamins, nutrients, and diets for better health.
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
          />
          <div className="flex grow basis-0 flex-col rounded-md bg-background p-4">
            <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
              <HeartPulse className="h-auto w-5" />
            </div>
            <h3 className="mb-2 font-semibold">Health Tips</h3>
            <p className="text-sm text-muted-foreground">
              Access a library of tips on mental health, fitness, and preventive care.
            </p>
          </div>
        </div>
      </div>
      </section>
      <footer className={cn(" flex flex-col bg-background text-foreground pt-8")}>
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Created by Sai Srinivas Alahari. All rights reserved. | Powered by Next.js, OpenAI, and Spline.
          </p>
        </div>
      </footer>
      </>
  );
};

export default NewHomepage;
