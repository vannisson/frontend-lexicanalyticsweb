import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faMagnifyingGlass,
  faBookBookmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div class="min-h-screen flex flex-row bg-zinc-50">
      <div class="flex flex-col w-56 bg-zinc-50 rounded-r-3xl overflow-hidden">
        <div class="flex items-center justify-center h-20 shadow-md"></div>
        <p class="text-2xl font-medium">Produções</p>
        <ul class="flex flex-col py-4">
          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-sky-600 hover:text-sky-900"
            >
              <span class="h-12 w-12"></span>
              <FontAwesomeIcon icon={faFileCirclePlus} fixedWidth />
              <span class="text-sm font-medium"> &nbsp;Nova Análise</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-sky-600 hover:text-sky-900"
            >
              <span class="h-12 w-12"></span>
              <FontAwesomeIcon icon={faMagnifyingGlass} fixedWidth />
              <span class="text-sm font-medium">&nbsp;Último Resultado</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-sky-600 hover:text-sky-900"
            >
              <span class="h-12 w-12"></span>
              <FontAwesomeIcon icon={faBookBookmark} fixedWidth />
              <span class="text-sm font-medium">&nbsp;Minhas Produções</span>
            </a>
          </li>
          <div class="flex items-center justify-center h-20 shadow-md"></div>
          <li>
            <a
              href="#"
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-sky-600 hover:text-sky-900"
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} fixedWidth />
              <span class="w-12 text-sm font-medium">&nbsp;Sair</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
