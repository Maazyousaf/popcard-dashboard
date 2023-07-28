import React from "react";

const Calendar = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      className="cursor-pointer"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M3.00977 10.925V16.5778C3.00977 18.0059 3.57707 19.3755 4.58687 20.3853C5.59667 21.3951 6.96625 21.9624 8.39433 21.9624H15.9049C16.612 21.9624 17.3122 21.8231 17.9655 21.5525C18.6188 21.2819 19.2124 20.8853 19.7124 20.3853C20.2124 19.8853 20.609 19.2917 20.8796 18.6384C21.1502 17.9851 21.2895 17.2849 21.2895 16.5778V10.925C21.2895 10.7089 21.2036 10.5017 21.0509 10.349C20.8981 10.1962 20.6909 10.1104 20.4748 10.1104H3.8244C3.60835 10.1104 3.40114 10.1962 3.24837 10.349C3.09559 10.5017 3.00977 10.7089 3.00977 10.925Z"
        fill="#A1A5B7"
      />
      <path
        d="M20.9401 7.63629C20.9864 7.76041 21.0021 7.89385 20.9859 8.02532C20.9697 8.15679 20.9221 8.28242 20.847 8.39158C20.772 8.50073 20.6717 8.5902 20.5548 8.65241C20.4378 8.71462 20.3076 8.74774 20.1752 8.74897H4.27977C4.11786 8.75011 3.95812 8.71166 3.81446 8.63697C3.6708 8.56227 3.54757 8.45359 3.45551 8.32039C3.36345 8.1872 3.30533 8.03351 3.28623 7.87273C3.26713 7.71194 3.28762 7.54892 3.34592 7.39786C3.64728 6.67526 4.10177 6.02661 4.67805 5.49664C5.25433 4.96667 5.93869 4.56798 6.68395 4.32806V2.77826C6.68263 2.68871 6.69913 2.5998 6.73249 2.51669C6.76585 2.43357 6.8154 2.35793 6.87827 2.29414C6.94113 2.23035 7.01605 2.1797 7.09866 2.14513C7.18128 2.11056 7.26994 2.09276 7.3595 2.09277C7.54131 2.09277 7.71566 2.16499 7.84422 2.29355C7.97277 2.4221 8.04499 2.59646 8.04499 2.77826V4.0797C8.17414 4.0797 8.25362 4.0797 8.3629 4.0797H11.6115V2.77826C11.6115 2.59646 11.6837 2.4221 11.8123 2.29355C11.9408 2.16499 12.1152 2.09277 12.297 2.09277C12.4788 2.09277 12.6532 2.16499 12.7817 2.29355C12.9103 2.4221 12.9825 2.59646 12.9825 2.77826V4.0797H15.8635C15.9728 4.0797 16.0722 4.0797 16.1814 4.0797V2.77826C16.1801 2.68871 16.1966 2.5998 16.23 2.51669C16.2633 2.43357 16.3129 2.35793 16.3758 2.29414C16.4386 2.23035 16.5135 2.1797 16.5962 2.14513C16.6788 2.11056 16.7674 2.09276 16.857 2.09277C17.0388 2.09277 17.2132 2.16499 17.3417 2.29355C17.4703 2.4221 17.5425 2.59646 17.5425 2.77826V4.32806C18.3224 4.58622 19.0334 5.01813 19.622 5.59121C20.2106 6.1643 20.6613 6.86358 20.9401 7.63629ZM8.89937 13.0209C8.73279 13.0228 8.57051 13.074 8.43296 13.168C8.2954 13.2619 8.18872 13.3945 8.12632 13.549C8.06393 13.7034 8.04862 13.8729 8.08232 14.036C8.11601 14.1992 8.19721 14.3487 8.31569 14.4658C8.43418 14.5829 8.58465 14.6624 8.74818 14.6942C8.91171 14.726 9.08099 14.7087 9.23471 14.6445C9.38843 14.5803 9.51974 14.472 9.61209 14.3334C9.70445 14.1948 9.75373 14.0319 9.75375 13.8653C9.75113 13.6404 9.65996 13.4257 9.50002 13.2676C9.34007 13.1095 9.12425 13.0208 8.89937 13.0209ZM12.0884 13.0209C11.9218 13.0228 11.7595 13.074 11.622 13.168C11.4844 13.2619 11.3777 13.3945 11.3153 13.549C11.2529 13.7034 11.2376 13.8729 11.2713 14.036C11.305 14.1992 11.3862 14.3487 11.5047 14.4658C11.6232 14.5829 11.7737 14.6624 11.9372 14.6942C12.1007 14.726 12.27 14.7087 12.4237 14.6445C12.5774 14.5803 12.7087 14.472 12.8011 14.3334C12.8935 14.1948 12.9427 14.0319 12.9428 13.8653C12.9401 13.6404 12.849 13.4257 12.689 13.2676C12.5291 13.1095 12.3133 13.0208 12.0884 13.0209ZM15.3072 13.0209C15.1963 13.0209 15.0865 13.0427 14.984 13.0851C14.8816 13.1276 14.7885 13.1898 14.7101 13.2682C14.6317 13.3466 14.5695 13.4397 14.527 13.5421C14.4846 13.6446 14.4628 13.7544 14.4628 13.8653C14.4628 13.9762 14.4846 14.086 14.527 14.1885C14.5695 14.2909 14.6317 14.384 14.7101 14.4624C14.7885 14.5408 14.8816 14.603 14.984 14.6455C15.0865 14.6879 15.1963 14.7097 15.3072 14.7097C15.4181 14.7097 15.5279 14.6879 15.6304 14.6455C15.7328 14.603 15.8259 14.5408 15.9043 14.4624C15.9827 14.384 16.0449 14.2909 16.0874 14.1885C16.1298 14.086 16.1516 13.9762 16.1516 13.8653C16.1516 13.7544 16.1298 13.6446 16.0874 13.5421C16.0449 13.4397 15.9827 13.3466 15.9043 13.2682C15.8259 13.1898 15.7328 13.1276 15.6304 13.0851C15.5279 13.0427 15.4181 13.0209 15.3072 13.0209ZM8.88943 16.1999C8.72286 16.2019 8.56058 16.2531 8.42302 16.3471C8.28547 16.441 8.17878 16.5736 8.11639 16.728C8.054 16.8825 8.03868 17.052 8.07238 17.2151C8.10608 17.3783 8.18728 17.5278 8.30576 17.6449C8.42424 17.762 8.57472 17.8415 8.73825 17.8732C8.90177 17.905 9.07105 17.8877 9.22478 17.8235C9.3785 17.7593 9.5098 17.6511 9.60216 17.5125C9.69451 17.3738 9.7438 17.211 9.74381 17.0444C9.74382 16.9326 9.72165 16.822 9.6786 16.7189C9.63554 16.6158 9.57245 16.5223 9.49298 16.4437C9.41351 16.3652 9.31924 16.3032 9.21564 16.2613C9.11204 16.2195 9.00116 16.1986 8.88943 16.1999ZM12.0784 16.1999C11.9119 16.2019 11.7496 16.2531 11.612 16.3471C11.4745 16.441 11.3678 16.5736 11.3054 16.728C11.243 16.8825 11.2277 17.052 11.2614 17.2151C11.2951 17.3783 11.3763 17.5278 11.4948 17.6449C11.6133 17.762 11.7637 17.8415 11.9273 17.8732C12.0908 17.905 12.2601 17.8877 12.4138 17.8235C12.5675 17.7593 12.6988 17.6511 12.7912 17.5125C12.8835 17.3738 12.9328 17.211 12.9328 17.0444C12.9328 16.9326 12.9107 16.822 12.8676 16.7189C12.8246 16.6158 12.7615 16.5223 12.682 16.4437C12.6025 16.3652 12.5083 16.3032 12.4047 16.2613C12.3011 16.2195 12.1902 16.1986 12.0784 16.1999ZM15.2873 16.1999C15.1212 16.2038 14.9599 16.2567 14.8237 16.3518C14.6875 16.4469 14.5824 16.5801 14.5215 16.7348C14.4606 16.8894 14.4467 17.0585 14.4815 17.221C14.5163 17.3834 14.5982 17.532 14.7171 17.6482C14.8359 17.7643 14.9864 17.8427 15.1496 17.8738C15.3129 17.9048 15.4816 17.8869 15.6348 17.8225C15.7879 17.758 15.9187 17.6498 16.0106 17.5114C16.1025 17.373 16.1516 17.2105 16.1516 17.0444C16.1503 16.9322 16.127 16.8213 16.0828 16.7182C16.0387 16.615 15.9747 16.5215 15.8944 16.4431C15.8141 16.3647 15.7192 16.3029 15.6151 16.2612C15.5109 16.2194 15.3995 16.1986 15.2873 16.1999Z"
        fill="#A1A5B7"
      />
    </svg>
  );
};

export default Calendar;