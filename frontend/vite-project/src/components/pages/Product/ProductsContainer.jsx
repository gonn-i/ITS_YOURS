import React, { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard';
import {
	ProductsWrap,
	Products,
	NoProductsMessageWrap,
	NoProductsMessage,
	Searchrecommendation,
} from './ProductsContainerStyle';
import Paginator from '../../Paginator';
import ProductHeader from './ProductHeader';
import { useNavigate, useLocation as useRegion } from 'react-router-dom';
import { fetchDefaultProducts } from '../../../apis/service/product.api';

function ProductsContainer() {
	const navigate = useNavigate();
	const region = useRegion();

	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalItems, setTotalItems] = useState(0);
	const [selectedRegion, setSelectedRegion] = useState('');
	const [selectedUniversity, setSelectedUniversity] = useState('');

	const itemsPerPage = 20;

	useEffect(() => {
		if (region.state && region.state.searchResults) {
			handleSearchResults(region.state.searchResults);
		} else {
			loadDefaultProducts();
		}
	}, [region.state]);

	const loadDefaultProducts = async () => {
		try {
			const productsData = await fetchDefaultProducts();
			setProducts(productsData);
			setDisplayProducts(productsData);
			setFilteredProducts(productsData);
			setTotalItems(productsData.length);
		} catch (error) {
			console.error('Error loading default products:', error);
		}
	};

	const handleSearchResults = results => {
		setDisplayProducts(results);
		applyFilter(selectedRegion, selectedUniversity, results);
		setCurrentPage(0);
	};

	const applyFilter = (region, university, productsToFilter) => {
		// region과 university를 사용하여 필터링된 상품을 찾음
		let filtered = productsToFilter.filter(product => {
			const isRegionMatch = region ? product.region === region : true;
			const isUniversityMatch = university
				? university === '전체' || product.schoolName === university
				: true;
			return isRegionMatch && isUniversityMatch;
		});

		setFilteredProducts(filtered);
		setTotalItems(filtered.length);
		setCurrentPage(0);
	};

	const handleSortChange = sortOption => {
		let sorted = [...filteredProducts];
		if (sortOption === 'latest') {
			sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		} else if (sortOption === 'cheapest') {
			sorted.sort((a, b) => a.price - b.price);
		}
		setFilteredProducts(sorted);
		setCurrentPage(0);
	};

	const handleFilterChange = (region, university) => {
		setSelectedRegion(region);
		setSelectedUniversity(university);
		applyFilter(region, university, displayProducts);
	};

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const productsToShow = filteredProducts.slice(startIndex, endIndex);

	const scrollToTop = () => {
		window.scrollTo({ top: 0 });
	};

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
		scrollToTop();
	};

	const handleProductClick = productId => {
		navigate(`/product/${productId}`);
		scrollToTop();
	};

	return (
		<>
			<ProductHeader
				onSortChange={handleSortChange}
				onFilterChange={handleFilterChange}
				onSearchResults={handleSearchResults}
				totalItems={totalItems}
			/>
			<ProductsWrap>
				{totalItems === 0 ? (
					<NoProductsMessageWrap>
						<NoProductsMessage>검색 결과가 없습니다.</NoProductsMessage>
						<Searchrecommendation>
							- 단어의 철자가 정확한지 확인해 보세요
							<br />
							- 보다 일반적인 검색어로 다시 검색해 보세요
							<br />
							- 검색어의 띄어쓰기를 다르게 해보세요
							<br />- 유해/금지어가 아닌지 확인해 주세요
						</Searchrecommendation>
					</NoProductsMessageWrap>
				) : (
					<Products>
						{productsToShow.map(product => (
							<ProductCard
								key={product._id}
								productId={product._id}
								imgUrls={product.imgUrls}
								name={product.name}
								price={product.price}
								onClick={() => handleProductClick(product._id)}
							/>
						))}
					</Products>
				)}
			</ProductsWrap>
			{totalItems > 0 && (
				<Paginator
					currentPage={currentPage}
					totalItems={totalItems}
					itemsCountPerPage={itemsPerPage}
					onChange={handlePageChange}
				/>
			)}
		</>
	);
}

export default ProductsContainer;
