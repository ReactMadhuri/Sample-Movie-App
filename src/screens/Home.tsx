import React, {useEffect} from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  View,
  Button,
  
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMoviesRequest, fetchOnAirRequest, fetchTvRequest,fetchTopRatedRequest} from '../redux/actions';
import ListComponent from '../components/listComponent';
import { RootState } from '../redux/reducer/reducers';
import Header from '../components/header';

const HomeScreen = ({ navigation }: any) => {

  const dispatch = useDispatch();

  const {popularMovies, loading, error} = useSelector(
    (state: RootState) => state.movies,
  );
  const {popularTv, loadingTv, errorTv} = useSelector(
    (state: RootState) => state.tv,
  );
  const {popularOnAir, loadingOnAir, errorOnAir} = useSelector(
    (state: RootState) => state.onAir,
  );

  const {topRated, loadingTopRated, errorTopRated} = useSelector(
    (state: RootState) => state.topRated,
  );


  useEffect(() => {
    dispatch(fetchMoviesRequest());
    dispatch(fetchTvRequest());
    dispatch(fetchOnAirRequest())
    dispatch(fetchTopRatedRequest())

  }, [dispatch]);

  
  if (errorTv) return
  
 ( 
 <SafeAreaView>
 <Text>Error: {errorTv}</Text>

 </SafeAreaView>

 );

  return (
    <SafeAreaView >
      <Header
        title="Movie Explorer"
        rightItem={true}
      />
       
    <ScrollView style={{marginBottom:80}}>
    <ListComponent data={popularMovies} title="Popular Movies" type="banner" loading={loading}/>
 
      <View style={{margin:10}}>
      <ListComponent data={popularTv} title="Popular TV Shows" type="poster" loading={loadingTv}/>
      <ListComponent data={topRated} title="Top Rated Shows" type="poster" loading={loadingTopRated}/>
      <ListComponent data={popularOnAir} title="On Air Shows" type="poster" loading={loadingOnAir}/>

      </View>
      
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
