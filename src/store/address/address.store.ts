import {create} from "zustand";
import {persist} from "zustand/middleware";
import {IAddress} from "@/interfaces";

interface IState {
  address: IAddress;
  setAddress: (address: IState["address"]) => void;
}

export const useAddressStore = create<IState>()(
  persist(
    (set, _) => ({
      address: {
        firstName: "",
        lastName: "",
        address: "",
        optionalAddress: "",
        postalCode: "",
        city: "",
        country: "",
        phone: ""
      },
      setAddress: (address: IState["address"]) => {
        set({address});
      }
    }),
    {
      name: "address-storage"
    }
  )
);

