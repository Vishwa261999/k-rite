import { BadgePlus, CircleHelp, Folder, Plus, UserPlus } from "lucide-react";

export default function Sidebar() {
  return (
    <div class="sticky left-0 top-0 h-screen hidden lg:block bg-white">
      <aside class=" w-[308px] h-[100vh]" aria-label="Sidebar">
        <div class="px-1 py-1 overflow-y-auto rounded-md mt-0.5  text-black">
          <ul class=" border rounded-2xl p-2 h-[97vh] border-gray-300 flex flex-wrap relative">
            <div className="w-full relative top-0">
              <div className="flex items-center gap-2 p-2 justify-between ">
                <div className="flex items-center gap-2">
                  <img
                    className="rounded-lg h-9 w-9"
                    src="/images/logo2.png"
                    alt=""
                  />
                  <div className="flex text-xs flex-col">
                    <p className="text-gray-400">INC</p>
                    <h1 className="font-bold">InnovateHub</h1>
                  </div>
                </div>
                <img height={40} width={40} src="/images/user.png" alt="" />
              </div>
              <div className="border border-gray-300 p-2 rounded-t-2xl">
                <li className="">
                  <a
                    href="#"
                    class="flex items-center p-2 w-full text-xs text-black font-bold rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      src="/images/fountain-pen.png"
                      alt=""
                      height={20}
                      width={20}
                    />
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    <span class="ml-3">Design team</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    class="flex items-center p-2 text-xs text-black font-bold rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      src="/images/megaphone.png"
                      alt=""
                      height={20}
                      width={20}
                    />
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    <span class="ml-3">Marketing team</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    class="flex items-center p-2 text-xs text-black font-bold rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      src="/images/left-and-right.png"
                      alt=""
                      height={20}
                      width={20}
                    />
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    <span class="ml-3">Development team</span>
                  </a>
                </li>
              </div>
              <li className="">
                <a
                  href="#"
                  class="flex items-center border border-gray-300 rounded-b-2xl text-xs text-gray-500 font-semibold  hover:bg-gray-100 p-2   dark:hover:bg-gray-700"
                >
                  <BadgePlus />
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  <span class="ml-2">Create team</span>
                </a>
              </li>

              <li className=" p-2 rounded-md">
                <button
                  type="button"
                  class="flex items-center w-full  text-xs font-semibold text-gray-900 transition duration-75 rounded-lg group dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span
                    class="flex-1 text-left whitespace-nowrap"
                    sidebar-toggle-item
                  >
                    FOLDERS
                  </span>
                  <Plus />
                </button>
                <ul id="dropdown-example" class="hidden" className="px-1">
                  <li className="pl-2">
                    <a
                      href="#"
                      class="flex gap-2 items-center w-full p-1 text-xs font-semibold text-black transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700 "
                    >
                      <Folder size={20} />
                      Products
                    </a>
                  </li>
                  <li className="pl-2">
                    <a
                      href="#"
                      class="flex gap-2 items-center w-full p-1 text-xs font-semibold text-black transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700 "
                    >
                      <Folder size={20} />
                      <div className="flex gap-32 items-center w-full justify-between">
                        <p>Sales</p> <div>▼</div>
                      </div>
                    </a>
                  </li>
                  <li className="pl-2">
                    <a
                      href="#"
                      class="flex gap-2 items-center w-full p-1 text-xs font-semibold text-black transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700 "
                    >
                      <Folder size={20} />
                      <div className="flex gap-32 items-center w-full justify-between">
                        <p>Design</p> <div>▼</div>
                      </div>
                    </a>
                  </li>
                  <li className="pl-2">
                    <a
                      href="#"
                      class="flex gap-2 items-center w-full p-1 text-xs font-semibold text-black transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700 "
                    >
                      <Folder size={20} />
                      Office
                    </a>
                  </li>
                  <li className="pl-2">
                    <a
                      href="#"
                      class="flex gap-2 items-center w-full p-1 text-xs font-semibold text-black transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700 "
                    >
                      <Folder size={20} />
                      Legal
                    </a>
                  </li>
                </ul>
              </li>
            </div>

            <div className="flex absolute bottom-0 flex-col jus">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-xs font-semibold text-black rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <UserPlus size={15} />
                  <span class="flex-1 flex ml-3 whitespace-nowrap">
                    Invite teammates
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-xs font-semibold text-black rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <CircleHelp size={20} />
                  <span class="flex-1 ml-3 whitespace-nowrap">
                    Help and first steps
                  </span>
                  <span class="inline-flex items-center justify-center  p-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-md">
                    0/6
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center gap-3 p-2 text-xs font-semibold text-black rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="flex-1 flex items-center gap-2 whitespace-nowrap">
                    <p className="text-center text-xs border border-gray-300 rounded-sm text-black p-0.5">
                      7
                    </p>
                    days left on trail
                  </span>
                  <button className="bg-black h-8 w-20 rounded-lg  text-xs text-white p-2 ">
                    Add billing
                  </button>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </aside>

      <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
    </div>
  );
}
