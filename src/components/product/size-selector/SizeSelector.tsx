import {ISize} from "@/interfaces";
import clsx from "clsx";

interface ISizeSelectorProps {
  selectedSize: ISize | undefined;
  availableSizes: ISize[];
  onSizeChanged: (size: ISize) => void;
}

export const SizeSelector = ({selectedSize, availableSizes, onSizeChanged}: ISizeSelectorProps) => {

  return (
    <div className={"my-5"}>
      <h3 className={"font-bold mb-4"}>
        Available Sizes
      </h3>
      <div className={"flex"}>
        {
          availableSizes.map(size =>
            <button key={size}
                    onClick={() => onSizeChanged(size)}
                    className={
              clsx("mx-2 hover:underline text-lg", {
                "underline": size === selectedSize
              })
            }>
              {size}
            </button>
          )
        }
      </div>
    </div>
  );
}