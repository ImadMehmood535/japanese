import Image from "next/image";
import React from "react";

const ReviewCart = ({ review, flip }) => {
  return (
    <div className="ReviewCart">
      <div className={`flex  gap-6 ${flip ? `flex-row-reverse` : `flex-row`}`}>
        <div className="image-area w-[50%]">
          <div className="  rounded-2xl   h-full overflow-hidden">
            <Image
              src={review.userProfile}
              width={2500}
              height={250}
              alt={review.name}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="content-area w-[50%]">
          <div className=" bg-[#FCFCFC] border rounded-2xl border-[#CCC6C4] py-4 px-2 h-full flex items-center justify-center flex-col">
            <div>
              <p className="text-[#160D09] font-normal text-center text-lg mb-3">
                {review.review}
              </p>
              <h4 className="font-bold text-black capitalize flex items-center flex-row gap-2 justify-center">
                {" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_207_333)">
                    <g clip-path="url(#clip1_207_333)">
                      <g clip-path="url(#clip2_207_333)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.16943 6.73001L8.03122 1L9.74479 1.00001L7.88299 6.73001H6.16943Z"
                          fill="#FF672E"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.20626 11.901L1.33203 8.35968L1.86157 6.72998L6.73581 10.2713L6.20626 11.901Z"
                          fill="#FFD600"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.1204 13.4589L6.24616 17.0002L4.85986 15.993L9.73408 12.4517L11.1204 13.4589Z"
                          fill="#FFB800"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.1292 9.25488L15.991 14.9849L14.6047 15.9921L12.7429 10.2621L14.1292 9.25488Z"
                          fill="#FFAA05"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.0732 5.1001H17.0981L17.6276 6.7298H11.6027L11.0732 5.1001Z"
                          fill="#FF883B"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_207_333">
                      <rect
                        width="17"
                        height="17"
                        fill="white"
                        transform="translate(0.979736 0.5)"
                      />
                    </clipPath>
                    <clipPath id="clip1_207_333">
                      <rect
                        width="17"
                        height="17"
                        fill="white"
                        transform="translate(0.979736 0.5)"
                      />
                    </clipPath>
                    <clipPath id="clip2_207_333">
                      <rect
                        width="17"
                        height="17"
                        fill="white"
                        transform="translate(0.979736 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {review.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
