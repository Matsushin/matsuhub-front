import { AiFillQuestionCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/store';
import { fetchCanvases } from 'features/canvases/canvasesSlice';
import { fetchCanvas } from 'features/canvases/canvasSlice';
import { RootState } from 'app/rootReducer';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';

export default function CanvasShow() {
  const [canvasMenuOpen, setCanvasMenuOpen] = useState<boolean>(false);
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { canvasId } = router.query;

  useEffect(() => {
      dispatch(fetchCanvases());
  }, [dispatch]);

  useEffect(() => {
    if (canvasId) {
      dispatch(fetchCanvas(canvasId));
    }
  }, [canvasId]);

  const togglePopoverCanvasMenuOpen = () => {
    setCanvasMenuOpen(!canvasMenuOpen);
  };

  const IconStyle = {
    fontSize: "27px",
    color: "#D8D8D8",
    marginRight: "4px",
    marginBottom: "4px"
  };

  return (
    <div className="flex-grow">
      <h1 className="m-3 font-semibold text-gray-700">仮説キャンバス</h1>
      <table className="h-screen w-full mb-6 bc-separate">
        <tbody>
          <tr>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/2"
              colSpan={3}
            >
              <Popover onClick={togglePopoverCanvasMenuOpen}>
                <div className="absolute left-3 top-3">
                  <div className="flex mb-3 w-auto">
                    <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                      {canvas ? canvas["areas"][0]["area_type_text"] : null}
                    </label>
                    <AiFillQuestionCircle style={IconStyle} />
                    <AiFillPlusCircle style={IconStyle} aria-hidden="true" />
                  </div>
                  {!canvasMenuOpen && (
                    <p className="text-gray-400 font-semibold text-xs">
                      {canvas ? canvas["areas"][0]["description"] : null}
                    </p>
                  )}
                </div>
                <Transition
                  show={canvasMenuOpen}
                  as={Fragment}
                  enter="transition ease-out duration-50"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-50"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="transform mr-2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="grid gap-6 bg-white sm:gap-5 sm:p-2 border-l-4 border-customgreen">
                        <input
                          type="text"
                          autoFocus={true}
                          onKeyPress={e => {
                            if (e.key == "Enter") {
                              e.preventDefault();
                              alert("テスト");
                            }
                          }}
                          className="border-gray-400 rounded-md"
                        />
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </td>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto"
              colSpan={3}
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][1]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][1]["description"] : null}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6"
              rowSpan={2}
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][2]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][2]["description"] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][3]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][3]["description"] : null}
                </p>
              </div>
            </td>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6"
              rowSpan={2}
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][4]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][4]["description"] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][5]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][5]["description"] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][6]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][6]["description"] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][7]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][7]["description"] : null}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][8]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][8]["description"] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][9]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][9]["description"] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][10]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][10]["description"] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][11]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][11]["description"] : null}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto"
              colSpan={3}
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][12]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][12]["description"] : null}
                </p>
              </div>
            </td>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto"
              colSpan={3}
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas["areas"][13]["area_type_text"] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas["areas"][13]["description"] : null}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
