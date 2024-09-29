import React from "react";

const CheckoutForm = ({ errors, register, options }) => {
  return (
    <div className="CheckoutForm GeneralSans">
      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="uppercase text-black rubick text-4xl font-semibold mb-4">
          Contact
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 mb-2">
          <div className="field-container relative  ">
            <input
              label="Email"
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("email")}
            />
            {errors?.email && (
              <p className="text-sm text-red-800">{errors?.email?.message}</p>
            )}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="email-offers"
              {...register("emailOffers")}
              className="mr-2 bg-transparent focus:bg-transprent  "
            />
            <label htmlFor="email-offers" className="text-black">
              <span role="img" aria-label="trophy">
                🏆
              </span>{" "}
              Email me with Winner Announcements and Offers
            </label>
          </div>
        </div>
      </div>

      {/* Delivery Section */}
      <div className="delivery-section mt-6">
        <h2 className="uppercase text-black rubick text-4xl font-semibold mb-4">
          Delivery
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 mb-2">
          <div className="field-container relative  ">
            <select
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("country")}
            >
              <option value="">Country/Region</option>
              {options?.map((option) => (
                <option
                  className="text-black bg-transparent focus:bg-transprent  "
                  key={option.name}
                  value={option.name}
                >
                  {option.name}
                </option>
              ))}
            </select>
            {errors?.country && (
              <p className="text-sm text-red-800">{errors?.country?.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-2">
          <div className="field-container relative  ">
            <input
              type="text"
              placeholder="First name"
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("firstName")}
            />
            {errors?.firstName && (
              <p className="text-sm text-red-800">
                {errors?.firstName?.message}
              </p>
            )}
          </div>

          <div className="field-container relative  ">
            <input
              type="text"
              placeholder="Last name"
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("lastName")}
            />
            {errors?.lastName && (
              <p className="text-sm text-red-800">
                {errors?.lastName?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-2">
          <div className="field-container relative  ">
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("address")}
            />
            {errors?.address && (
              <p className="text-sm text-red-800">{errors?.address?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-2">
          <div className="field-container relative  ">
            <input
              type="text"
              placeholder="Apartment #, Etc (optional)"
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("apartment")}
            />
            {errors?.apartment && (
              <p className="text-sm text-red-800">
                {errors?.apartment?.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-2">
          <div className="field-container relative  ">
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("city")}
            />
            {errors?.city && (
              <p className="text-sm text-red-800">{errors?.city?.message}</p>
            )}
          </div>
          <div className="field-container relative  ">
            <select
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("state")}
            >
              <option value="">State</option>
              {/* Add state options here */}
            </select>
            {errors?.state && (
              <p className="text-sm text-red-800">{errors?.state?.message}</p>
            )}
          </div>
          <div className="field-container relative  ">
            <input
              type="text"
              placeholder="ZIP code"
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("zipCode")}
            />
             {errors?.zipCode && (
              <p className="text-sm text-red-800">{errors?.zipCode?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-2">
          <div className="field-container relative  ">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border border-[#B1B1B1] rounded-lg bg-white text-black bg-transparent focus:bg-transprent "
              {...register("phone")}
            />
            {errors?.phone && (
              <p className="text-sm text-red-800">{errors?.phone?.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Submit button (can be added back when needed) */}
      {/* <div className="py-3">
        <ButtonComponent type={"submit"} text="Submit" isActive={true} />
      </div> */}
    </div>
  );
};

export default CheckoutForm;
