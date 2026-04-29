"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ServiceAssessmentModal } from "@/components/marketing/ServiceAssessmentModal";

export function AssessmentTriggerCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="p-5">
        <h3 className="font-semibold text-text-primary">Find your best-fit service</h3>
        <p className="mt-2 text-sm leading-6 text-text-secondary">
          Answer a few questions and get SSL service recommendations based on your business type, sector, and needs.
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
          className="mt-4 inline-flex text-sm font-medium text-primary"
        >
          Take assessment
        </a>
      </Card>

      <ServiceAssessmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
