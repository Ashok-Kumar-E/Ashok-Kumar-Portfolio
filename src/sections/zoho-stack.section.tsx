// zoho Stack
import ZohoBooks from '../assets/zoho-books.png';
import ZohoCatalyst from '../assets/zoho-catalyst.png';
import ZohoCreator from '../assets/zoho-creator.png';
import ZohoCrm from '../assets/zoho-crm.png';
import ZohoFlow from '../assets/zoho-flow.png';
import ZohoForms from '../assets/zoho-forms.png';
import ZohoInventory from '../assets/zoho-inventory.png';
import ZohoPeople from '../assets/zoho-people.png';
import ZohoSign from '../assets/zoho-sign.png';
import ZohoWorkDrive from '../assets/zoho-workdrive.png';


import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const zohoApplications = [
	{
		heading: 'Core Business Apps',
		items: [
			{
				title: 'Zoho CRM',
				icon: <img src={ZohoCrm} color="rgb(0, 127, 255)" style={{ width: 90, height: 90, marginLeft: 2, marginTop: 26 }} />,
				color: 'rgb(0, 127, 255, 0.6)',
			},
			{
				title: 'Zoho People',
				icon: <img src={ZohoPeople} color="rgb(0, 127, 255)" style={{ width: 90, height: 90, marginLeft: 2, marginTop: 26 }} />,
				color: 'rgb(104, 160, 99)',
			},
			{
				title: 'Zoho Books',
				icon: <img src={ZohoBooks} color="rgb(0, 127, 255)" style={{ width: 90, height: 90, marginLeft: 2, marginTop: 26 }} />,
				color: 'rgb(0, 127, 255, 0.6)',
			},
			{
				title: 'Zoho Inventory',
				icon: <img src={ZohoInventory} color="rgb(247, 223, 30)" style={{ width: 90, height: 90, marginLeft: 1, marginTop: 26 }} />,
				color: 'rgb(230, 50, 42)',
			}
		],
	},
	{
		heading: 'Development & Workflow Tools',
		items: [
			{
				title: 'Zoho Creator (Low-Code Platform)',
				icon: <img src={ZohoCreator} color="rgb(230, 50, 42)" style={{ width: 90, height: 90, marginLeft: 2, marginTop: 26 }} />,
				color: 'rgb(0, 127, 255)',
			},
			{
				title: 'Zoho Flow',
				icon: <img src={ZohoFlow} color="rgb(0, 127, 255)" style={{ width: 90, height: 90, marginLeft: 2, marginTop: 26 }} />,
				color: 'rgb(104, 160, 99)',
			},
			{
				title: 'Zoho Catalyst',
				icon: <img src={ZohoCatalyst} color="rgb(230, 50, 42)" style={{ width: 50, height: 50 }} />,
				color: 'rgb(0, 127, 255)',
			}
		],
	},
	{
		heading: 'Collaboration & Utilities',
		items: [
			{
				title: 'Zoho WorkDrive',
				icon: <img src={ZohoWorkDrive} color="rgb(0, 127, 255)" style={{ width: 50, height: 50 }} />,
				color: 'rgb(0, 122, 158, 0.75)',
			},
			{
				title: 'Zoho Sign',
				icon: <img src={ZohoSign} color="rgb(0, 127, 255)" style={{ width: 50, height: 50 }} />,
				color: 'rgb(247, 223, 30)',
			},
			{
				title: 'Zoho Forms',
				icon: <img src={ZohoForms} color="rgb(0, 127, 255)" style={{ width: 50, height: 50 }} />,
				color: 'rgb(104, 160, 99)',
			}
		],
	},
];

export const ZohoStack = () => {
	return (
		<section
			className='zoho-stack'
			id='zoho-stack'
		>
			<div className='zoho-grid'>
				{zohoApplications.map((zoho, index) => (
					<div key={index}>
						<p>{zoho.heading}</p>
						<div className='zoho-row'>
							{zoho.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Zoho'
					subTitle='STACK'
				/>
			</div>
		</section>
	);
};
