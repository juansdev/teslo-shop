import {Title} from '@/components';
import AddressForm from "@/app/(shop)/checkout/address/ui/AddressForm";
import {getCountries, getUserAddress} from "@/actions";
import {IAddress, ICountry} from "@/interfaces";
import {auth} from "@/auth.config";

export default async function AddressPage() {
  const countries: ICountry[] = await getCountries();
  const session = await auth();
  const userAddress = await getUserAddress(session!.user.id);
  let userStoredAddress: Partial<IAddress> = {};
  if (userAddress) userStoredAddress = {
    firstName: userAddress.firstName,
    lastName: userAddress.lastName,
    address: userAddress.address,
    optionalAddress: userAddress.optionalAddress ?? undefined,
    postalCode: userAddress.postalCode,
    city: userAddress.city,
    country: userAddress.country,
    phone: userAddress.phone
  };

  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Address" subtitle="Delivery Address"/>
        <AddressForm countries={countries} userStoredAddress={userStoredAddress}/>
      </div>
    </div>
  );
}