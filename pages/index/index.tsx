/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import { PageBase } from "../../components/page-base/PageBase.tsx";
function IndexPage() {
  const changeTheme = () => {
    try {
      console.log("Hi");
      document.documentElement.style.setProperty("--background", "#fff");
      document.documentElement.style.setProperty("--color", "#000");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageBase title={"Feedback"} description={"Feedback for Pruthvi Shetty"}>
      <div class="container">
        <h1 class="page-heading">Feedback</h1>
        <p>
          Thanks for working with me, as one kind request I would love to have
          your feedback on my work as I always look at ways to improve myself
        </p>
        <div class="form-container">
          <div class="pruthvi-svg">
            <svg
              width="512"
              height="691"
              viewBox="0 0 512 691"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M363.688 386.283C359.774 384.887 356.002 383.275 352.565 380.904C342.657 373.529 336.197 362.429 330.092 351.912C321.494 336.617 315.368 320.319 311.134 303.317C309.314 296.012 308.696 287.542 304.563 281.066C295.192 267.505 267.713 269.262 253.121 271.642C243.35 273.371 241.33 284.308 239.111 292.4C237.263 299.124 236.053 305.924 235.038 312.815C232.622 314.403 229.895 315.693 227.295 316.817C198.964 325.505 193.985 341.612 183.164 366.493C164.888 402.656 115.294 416.815 107.803 459.614C102.977 487.869 116.702 514.451 130.853 537.941C144.031 563.598 162.429 575.912 191.729 569.85C219.211 563.685 245.622 553.372 272.62 545.402C285.697 542.187 298.752 533.823 312.507 536.739C340.85 543.105 369.97 546.098 399.016 545.272C439.798 546.921 439.791 507.776 435.606 477.462C432.674 430.286 408.881 399.993 363.688 386.283V386.283Z"
                fill="#D08B5B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M366.415 454.546C369.823 456.8 372.689 460.217 374.989 463.813C365.384 462.814 355.795 461.662 346.228 460.35C347.48 459.55 348.744 458.767 350.037 458.027C354.755 455.369 361.147 451.063 366.415 454.546ZM206.827 482.943C205.067 482.253 204.386 479.57 203.7 478.031C201.549 473.207 199.587 468.3 197.544 463.429C205.298 461.219 212.839 458.766 220.871 457.588C229.508 456.322 238.272 456.016 246.989 456.3C264.645 456.876 282.137 459.762 299.495 462.856C316.833 465.947 334.17 468.917 351.63 471.247C368.735 473.53 385.895 475.201 403.087 476.668C406.427 476.953 411.996 478.154 414.682 475.525C416.809 473.443 416.878 469.604 414.217 467.911C412.559 466.856 410.157 466.84 408.263 466.597C405.878 466.29 403.484 466.086 401.084 465.927C400.107 465.862 399.129 465.803 398.151 465.743C406.001 462.783 414.2 461.169 422.71 461.619C423.191 464.543 425.36 467.551 426.546 469.963C428.619 474.173 430.234 478.434 431.294 483.012C433.511 492.58 433.607 502.511 432.981 512.27C432.406 520.407 431.171 529.408 424.789 535.171C419.957 539.534 413.14 541.149 406.815 541.657C399.464 542.248 391.999 541.617 384.71 540.632C374.486 539.249 364.215 537.421 354.192 534.971C334.78 530.225 316.173 522.674 299.006 512.437C290.634 507.445 282.646 501.829 274.159 497.026C265.512 492.132 256.31 488.335 246.648 485.978C235.835 483.34 224.531 482.214 213.418 482.865C211.489 482.977 208.703 483.677 206.827 482.943ZM194.297 478.044C195.433 481.731 196.302 485.942 198.728 489.04C201.13 492.111 204.754 493.194 208.508 493.468C213.035 493.796 217.615 493.586 222.152 493.754C231.457 494.1 240.634 495.611 249.529 498.384C257.818 500.968 265.513 504.999 272.926 509.47C279.78 513.605 286.433 518.045 293.29 522.167C291.465 523.004 289.661 523.909 287.847 524.697C284.042 526.349 280.213 527.944 276.368 529.498C268.785 532.563 261.17 535.554 253.477 538.333C237.964 543.935 222.197 548.83 206.24 552.999C198.629 554.988 190.911 557.311 183.004 557.641C175.993 557.934 169.498 555.952 163.844 551.783C152.116 543.136 142.785 530.655 135.242 518.344C130.76 511.029 126.85 503.344 123.615 495.398C121.979 491.379 120.495 487.299 119.16 483.171C118.533 481.233 117.939 479.284 117.377 477.326C117.129 476.465 116.892 475.601 116.657 474.737C128.65 471.077 140.785 467.773 153.205 465.938C159.837 464.959 166.556 464.463 173.26 464.535C176.588 464.571 179.913 464.751 183.223 465.094C185.005 465.279 186.779 465.517 188.546 465.812C189.276 465.933 190.027 466.112 190.779 466.245C191.929 470.185 193.088 474.121 194.297 478.044ZM442.203 462.378C442.849 461.071 443.122 459.784 443.354 458.361C443.53 457.275 443.999 455.747 443.588 454.337C443.129 452.758 441.876 451.345 440.977 449.999C439.984 448.51 438.992 447.021 438.001 445.531C436.02 442.551 434.042 439.568 432.068 436.583C424.007 424.395 416 412.171 407.98 399.955C400.864 389.114 393.867 378.175 386.534 367.48C380.263 358.334 373.428 349.339 364.845 342.227C353.992 333.233 341.07 328.997 327.572 325.691C326.097 324.16 324.128 323.325 322.024 323.494C319.05 320.121 316.686 317.765 315.615 313.476C315.102 311.421 315.262 305.649 313.262 304.433C310.885 302.989 309.644 304.9 308.989 307.054C306.796 314.262 309.313 323.952 315.104 331.172C312.664 339.606 309.429 351.592 303.658 358.349C297.478 365.584 288.931 367.836 279.71 367.984C262.124 368.267 244.557 361.731 231.144 350.403C227.066 346.96 223.28 343.114 219.854 339.025C217.285 335.957 214.245 331.221 212.235 327.642C212.235 326.248 210.589 324.789 227.352 323.662C244.115 322.535 245.386 299.58 245.759 296.456C246.062 293.919 247.35 289.981 245.562 287.913C244.804 287.034 243.247 286.893 242.285 287.49C240.472 288.616 239.876 291.496 239.306 293.452C238.507 296.192 235.896 313.198 230.949 315.167C228.633 316.088 225.976 316.106 223.526 316.276C220.501 316.487 217.469 316.642 214.455 316.994C213.344 317.124 212.131 317.483 211.035 317.494C210.321 317.501 209.585 317.154 208.896 316.911C206.568 316.088 204.243 316.705 201.845 317.027C180.646 319.877 158.818 326.379 140.735 338.081C124.798 348.394 113.569 363.226 106.16 380.567C98.6004 398.264 94.2673 417.402 90.636 436.241C89.4196 442.554 88.3573 448.895 87.4446 455.258C86.5626 461.407 85.4592 467.693 85.1951 473.904C85.0906 476.362 85.6778 478.645 86.5815 480.889C87.5992 483.416 90.0046 484.412 92.3117 485.592C97.3763 488.183 102.719 490.192 108.223 491.615C111.586 497.733 114.416 504.09 116.69 510.688C115.847 512.359 115.829 514.856 115.667 516.481C115.264 520.527 115.092 524.595 115.056 528.66C114.984 536.807 115.473 544.946 115.857 553.081C116.247 561.332 117.541 593.884 117.752 597.86C117.916 600.948 117.695 605.267 119.322 608.009C121.822 612.223 127.991 612.081 130.848 608.664C201.845 623.928 335.299 619.331 389.047 611.651C396.04 610.651 393.845 611.76 395.623 609.993C396.958 608.666 398.093 606.394 398.462 604.568C398.956 602.13 398.16 599.924 396.764 597.951C395.297 595.878 395.03 592.52 394.485 590.054C393.196 584.226 392.556 558.628 391.954 555.791C391.766 554.907 391.585 553.973 391.366 553.038C401.225 553.972 411.498 553.972 420.877 550.674C426.196 548.804 431.157 545.866 434.975 541.672C439.598 536.594 442.17 530.2 443.493 523.527C445.2 514.922 445.562 506.008 445.227 497.26C444.761 486.922 443.047 476.438 438.791 466.945C440.191 465.645 441.365 464.076 442.203 462.378Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M350.05 218.164C349.082 209.638 350.335 191.818 350.419 190.735C350.95 183.89 347.75 156.862 341.7 159.352C331.553 151.301 318.037 149.524 305.399 148.674C279.148 146.91 251.222 150.96 230.952 168.666C220.927 177.861 211.168 191.234 211.952 205.158C202.844 218.357 190.004 236.463 201.352 251.893C205.21 256.823 211.341 258.659 216.186 262.392C225.933 270.272 232.048 281.579 241.888 289.411C267.956 312.888 312.219 317.792 337.83 291.089C357.635 271.75 354.433 242.819 350.95 218.164C348.607 201.589 351.939 234.798 350.05 218.164Z"
                fill="#D08B5B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M270.332 112.519C277.352 111.099 284.561 110.215 291.731 110.481L292.284 110.503C297.678 110.719 304.51 111.197 309.216 114.34C309.486 114.068 309.922 113.929 310.317 114.117C315.909 116.793 322.06 118.727 327.948 120.649C333.809 122.561 339.89 123.824 346.033 124.333C348.344 124.524 350.322 127.025 348.859 129.269C348.51 129.803 348.171 130.343 347.834 130.885C348.399 130.826 348.963 130.765 349.528 130.708C351.387 130.52 353.244 132.508 353.134 134.322C353.065 135.463 352.942 136.59 352.761 137.704C353.469 137.689 354.172 137.796 354.852 138.084C358.296 139.541 358.056 143.651 357.798 146.779C357.441 151.119 355.822 155.715 352.815 158.963C355.06 161.301 356.649 164.092 357.597 167.406C358.285 169.827 358.668 172.405 358.479 174.925L358.419 175.679C358.185 178.414 357.721 181.441 355.758 183.408C354.75 184.422 353.509 184.792 352.326 184.675C353.041 190.976 353.5 197.314 353.932 203.629L354.134 206.647C355.097 221.242 355.821 235.932 355.632 250.552C355.456 264.214 352.762 277.475 344.402 288.568C336.787 298.669 325.854 306.116 313.486 308.946C306.82 310.474 300.015 310.583 293.269 309.609C289.999 309.136 286.707 308.41 283.603 307.265C280.168 305.994 277.699 304.123 275.387 301.32C274.294 299.99 274.82 297.159 276.997 297.425C280.29 297.825 283.296 298.308 286.453 299.284L286.905 299.427C290.049 300.436 293.305 301.189 296.592 301.509C303.326 302.163 310.161 301.505 316.611 299.458C327.113 296.123 336.158 288.69 341.955 279.35C348.836 268.28 349.614 255.713 349.515 242.984C349.408 229.016 348.955 215.04 348.215 201.086L348.089 198.761C347.698 191.58 347.32 184.395 346.988 177.21C346.884 174.956 346.727 172.685 346.443 170.435C343.848 168.912 341.523 166.811 340.007 164.22C336.963 165.482 333.76 166.392 330.814 167.118C323.989 168.8 316.904 169.208 309.958 168.155C308.084 168.931 306.173 169.613 304.233 170.2C303.708 170.433 303.184 170.662 302.66 170.886C297.982 172.892 293.237 174.591 288.299 175.835L287.086 176.139C284.488 176.781 281.665 177.413 278.899 177.611C278.445 177.787 277.955 177.936 277.419 178.067C274.901 178.68 272.288 178.873 269.707 178.657C267.192 178.445 265.375 175.899 266.76 173.514C267.772 171.774 268.794 170.039 269.823 168.308C266.239 169.804 262.537 171.048 258.804 172.103C255.036 173.167 251.213 174.064 247.385 174.889C245.338 175.326 243.284 175.714 241.242 176.151C239.78 176.462 237.536 176.624 236.343 177.589C235.026 178.648 234.653 181.118 234.153 182.642C233.496 184.621 232.88 186.608 232.318 188.619C231.199 192.63 230.281 196.701 229.571 200.811C228.86 204.927 228.383 209.083 228.117 213.252C227.852 217.417 227.969 221.609 227.542 225.756C227.312 227.956 224.956 229.087 223.216 227.55C223.011 227.37 222.806 227.187 222.602 227.003L222.298 226.725C220.809 225.373 219.365 223.939 218.174 222.326C217.958 222.028 217.751 221.717 217.558 221.402C217.526 221.402 217.499 221.393 217.468 221.37L217.137 221.121C213.5 218.408 207.423 214.87 203.876 219.378C202.746 220.814 202.167 222.643 201.687 224.407L200.844 227.564C200.299 229.625 199.786 231.697 199.486 233.806C198.807 238.53 199.149 243.975 202.392 247.762C203.687 249.276 205.473 250.358 207.465 250.642C208.576 250.795 209.673 250.606 210.775 250.466C211.895 250.326 212.974 250.552 214.095 250.444C215.876 250.268 216.654 252.404 215.988 253.748C215.628 254.469 215.205 255.091 214.724 255.618C215.11 255.952 215.48 256.312 215.835 256.691C216.887 257.029 217.832 257.755 218.538 258.715C219.109 259.49 219.406 260.333 219.456 261.221C219.518 261.442 219.572 261.667 219.622 261.897L220.587 263.467C220.799 263.811 221.011 264.151 221.223 264.484C223.678 268.361 226.404 271.642 229.791 274.735C233.052 277.709 236.591 280.373 239.654 283.565L240.015 283.944C242.871 286.96 245.881 290.61 244.763 294.996C244.475 296.123 242.905 296.934 241.88 296.172C238.584 293.72 236.924 289.835 234.127 286.86C231.248 283.795 228.059 281.041 225.172 277.984C222.441 275.1 220.287 271.832 218.664 268.235C218.016 268.951 217.072 269.461 215.763 269.659C213.514 269.997 211.418 268.676 210.438 266.725C209.808 267.004 209.165 267.257 208.517 267.455C205.108 268.501 202.963 264.701 204.249 261.893C204.937 260.387 205.796 259.08 206.862 257.98C203.529 257.52 200.138 255.794 197.948 253.639C192.452 248.226 191.697 240.09 192.934 232.855C193.59 229.019 194.723 225.138 196.194 221.537C196.45 220.91 196.725 220.279 197.026 219.657C196.86 219.653 196.689 219.581 196.581 219.441C195.587 218.08 194.377 216.966 193.639 215.443C192.96 214.046 192.205 212.63 191.669 211.174C190.568 208.195 190.028 204.832 189.668 201.681C188.926 195.231 189.214 188.822 190.199 182.412C191.876 171.495 195.928 161.047 201.896 151.88C201.571 151.709 201.26 151.502 200.97 151.258L200.826 151.133L200.593 150.922C198.89 149.377 199.037 146.482 200.593 144.917L201.085 144.423C201.707 143.804 202.244 143.313 203.249 142.638C203.398 142.539 203.549 142.445 203.703 142.357C203.176 141.383 202.994 140.243 203.36 138.986C204.638 134.607 210.925 134.762 214.91 136.672C219.319 132.728 224.208 129.304 229.507 126.532C242.128 119.933 256.398 115.331 270.332 112.519ZM205.095 227.866C207.452 227.095 210.582 228.713 212.7 229.687C215.385 230.922 217.67 232.747 219.883 234.676C220.985 235.641 221.182 237.219 220.908 238.566C220.881 238.702 220.854 238.841 220.823 238.981C220.53 240.419 218.929 241.55 217.512 241.51C214.548 241.429 213.137 238.864 211.459 236.691C211.261 237.043 211.014 237.367 210.708 237.611L210.501 237.773C209.804 238.304 209.037 238.729 208.117 238.688C207.465 238.656 206.84 238.49 206.264 238.188C204.825 237.426 204.191 235.56 204.582 234.041C204.825 233.085 205.382 232.337 206.111 231.819L205.839 231.632C205.258 231.227 204.728 230.8 204.315 230.169L204.222 230.02H204.258C203.808 229.245 204.101 228.19 205.095 227.866Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                id="pruthvi-face"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M276.158 276.397C279.807 267.847 287.771 261.564 296.94 259.267C303.674 257.584 310.741 257.638 317.605 258.305C321.201 258.653 325.058 258.938 328.448 260.273C331.342 261.414 333.701 263.571 335.474 266.103C337.585 269.103 339.021 272.537 340.029 276.057C340.172 276.557 340.307 277.061 340.432 277.568C339.994 280.224 339.063 282.484 336.604 284.153C334.204 285.784 331.34 286.451 328.486 286.687C328.206 286.553 327.935 286.415 327.687 286.273C323.239 283.727 320.108 277.708 314.493 278.522C309.483 279.25 306.184 285.555 303.204 289.252C293.64 290.367 284.082 287.492 276.3 282.023C275.905 280.15 275.882 278.263 276.158 276.397M346.933 269.911C346.168 267.764 345.204 265.684 344.062 263.725C340.286 257.245 334.488 252.083 327.606 249.132C311.326 242.16 290.261 247.075 277.113 258.508C272.622 262.417 268.081 268.161 266.708 274.339C266.298 274.42 265.91 274.634 265.592 274.934C256.093 268.953 246.311 263.199 238.656 254.908C233.097 248.884 229.231 241.755 226.863 233.921C226.67 233.276 225.63 233.37 225.662 234.084C225.671 234.251 225.68 234.417 225.689 234.584C225.59 234.277 225.121 234.435 225.085 234.733C223.812 244.25 222.218 254.339 223.686 263.905C224.563 269.613 227.156 273.792 230.622 278.304C234.335 283.141 238.539 287.64 242.838 291.954C245.565 294.693 248.414 297.851 251.754 299.859C255.639 302.192 260.045 303.966 264.191 305.766C268.408 307.603 272.689 309.299 277.05 310.77C285.769 313.721 294.78 315.761 303.949 316.654C311.29 317.367 319.68 318.144 326.715 315.382C332.107 313.266 336.46 309.44 339.912 304.836C343.67 299.823 346.642 294.113 348.284 288.091C349.991 281.836 347.293 270.92 346.933 269.911"
                fill="black"
              />
            </svg>
          </div>
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdILTcw2cRKhI5Qhq1LUw7lWWost1uWG1qyyWMrjdoe-kyepg/formResponse"
            target="dummyframe"
            method="POST"
            id="mG61Hd"
            jsmodel="TOfxwf Q91hve CEkLOc"
            data-shuffle-seed="-2321728389838511269"
            data-response="%.@.[]]"
            data-first-entry="0"
            data-last-entry="1"
            data-is-first-page="true"
            class="feedback-form"
            onsubmit="submitted=true;"
          >
            <label htmlFor="entry.1945378552">
              <span class="feedback-label">Your Feedback</span>
              <textarea
                class="feedback-textarea"
                name="entry.1945378552"
                id="entry.1945378552"
              ></textarea>
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
        <script type="text/javascript">
          const form = document.getElementById('mG61Hd'); function
          handleSubmit()
          {"{"}window.location="success"{"}"}
          form.addEventListener('submit', handleSubmit);
        </script>

        <iframe
          name="dummyframe"
          id="dummyframe"
          style="display: none;"
          onload="if(submitted)  {window.location='success';}"
        ></iframe>
      </div>
    </PageBase>
  );
}
export { IndexPage };