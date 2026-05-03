import { productIconItems } from "@/data/mockPlatform";
import {
  serviceIconMap,
  ServiceIconBlock,
  type ServiceIconName,
} from "@/components/ui/ServiceIconBlock";


export function ProductIconStrip() {
  return (
    <div className="mb-8 mt-12 flex flex-wrap items-start justify-center gap-x-5 gap-y-5">
      {productIconItems.map((item) => {
        return (
          <div
            key={item}
            className="flex w-[92px] flex-col items-center gap-2 text-center"
          >
            <ServiceIconBlock name={item as ServiceIconName} />
            <span className="text-xs leading-4 text-text-secondary">{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export function MiniPaymentMarks() {
  const marks = Object.values(serviceIconMap);

  return (
    <div className="flex items-center justify-center gap-3">
      {marks.map(({ Icon, tone }, index) => (
        <span
          key={index}
          className={`inline-flex size-8 items-center justify-center rounded-lg ${tone}`}
        >
          <Icon className="size-4" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}
