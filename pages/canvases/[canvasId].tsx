import { AiFillQuestionCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/store';
import { showCanvas } from 'features/canvases/canvasSlice';
import { RootState } from 'app/rootReducer';
import { useRouter } from 'next/router';

export default function CanvasShow() {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { canvasId } = router.query;

  useEffect(() => {
    if (canvasId) {
      dispatch(showCanvas(canvasId));
    }
  }, [canvasId]);
  
  const BorderSpacingStyle = {
    borderCollapse: "separate",
    borderSpacing: "4px"
  }

  const IconStyle = {
    fontSize: "27px",
    color: "#D8D8D8",
    marginRight: "4px",
    marginBottom: "4px"
  };

  return (
    <div className="flex-grow">
      <h1 className="m-3 font-semibold text-gray-700">仮説キャンバス</h1>
      <table className="h-screen w-full mb-6" style={BorderSpacingStyle}>
        <tbody>
          <tr>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/2"
              colspan="3"
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][0]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][0]['description'] : null}
                </p>
              </div>
            </td>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto"
              colspan="3"
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][1]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][1]['description'] : null}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6"
              rowspan="2"
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][2]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][2]['description'] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][3]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][3]['description'] : null}
                </p>
              </div>
            </td>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6"
              rowspan="2"
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][4]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][4]['description'] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][5]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][5]['description'] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][6]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][6]['description'] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto w-1/6">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][7]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][7]['description'] : null}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][8]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][8]['description'] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][9]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][9]['description'] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][10]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][10]['description'] : null}
                </p>
              </div>
            </td>
            <td className="relative bg-gray-100 border border-gray-150 rounded-md h-auto">
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][11]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][11]['description'] : null}
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto"
              colspan="3"
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][12]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][12]['description'] : null}
                </p>
              </div>
            </td>
            <td
              className="relative bg-gray-100 border border-gray-150 rounded-md h-auto"
              colspan="3"
            >
              <div className="absolute left-3 top-3">
                <div className="flex mb-3">
                  <label className="pr-2 pt-1 text-gray-600 font-semibold text-sm">
                    {canvas ? canvas['areas'][13]['area_type_text'] : null}
                  </label>
                  <AiFillQuestionCircle style={IconStyle} />
                  <AiFillPlusCircle style={IconStyle} />
                </div>
                <p className="text-gray-400 font-semibold text-xs">
                  {canvas ? canvas['areas'][13]['description'] : null}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
